import { inspect } from "@xstate/inspect";
import { useInterpret } from "@xstate/react";
import { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { StateMachine } from "xstate";
import { useLayout } from "../../lib/GlobalState";
import { MachineHelpersContext, MDXMetadata } from "../../lib/MachineHelpers";
import { metadata, MetadataItem } from "../../lib/metadata";
import $ from "jquery";

const useGetImports = (slug: string, deps: any[]) => {
  const [imports, setImports] = useState<{
    machine: StateMachine<any, any, any>;
    mdxDoc: any;
    mdxMetadata?: MDXMetadata;
  }>();

  const getMachine = async () => {
    setImports(undefined);
    const machineImport: {
      default: StateMachine<any, any, any>;
    } = await import(`../../lib/machines/${slug}.machine.ts`);

    const mdxDoc = await import(`../../lib/machines/${slug}.mdx`);

    setImports({
      machine: machineImport.default,
      mdxDoc: mdxDoc.default,
      mdxMetadata: mdxDoc.metadata,
    });
  };

  useEffect(() => {
    getMachine();
  }, [slug, ...deps]);

  return imports;
};

export const getStaticProps = async ({ params }) => {
  const fs = await import("fs");
  const path = await import("path");

  const machinesPath = path.resolve(process.cwd(), "lib/machines", `${params.id}.machine.ts`);

  const meta = metadata[params.id];

  if (!meta) {
    throw new Error(`Could not find metadata for ${params.id}. Go to lib/metadata.ts to fix.`);
  }

  return {
    props: {
      slug: params.id as string,
      fileText: fs.readFileSync(machinesPath).toString(),
      meta,
    },
  };
};

const MachinePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const layout = useLayout();
  const imports = useGetImports(props.slug, [layout]);
  const iframeRef = useRef(null);

  const _inject = (e) => {
    const $iframe = $(e.target).contents();
    const $container = $iframe.find('[data-xviz="machine-container"]');

    if ($container.length !== 1) {
      return setTimeout(() => _inject(e), 1000);
    }

    const $group = $iframe.find('[data-xviz="machine-group"]');
    const $body = $iframe.find("body");
    const control = {
      zoomMutation: 0.1,
      minZoom: 0.5,
      maxZoom: 2.0,
      zoomValue: 1.0,
      translate: {
        x: 0,
        y: 0,
        temp: {
          ready: false,
          x: 0,
          y: 0,
        },
      },
    };
    const _update = () => {
      $group.attr(
        "style",
        `transform: translate(${control.translate.x}px, ${control.translate.y}px) scale(${control.zoomValue})`,
      );
    };

    $body.on("wheel", function (e) {
      e.stopPropagation();

      if (e.originalEvent["wheelDelta"] / 120 > 0) {
        control.zoomValue += control.zoomMutation;
      } else {
        control.zoomValue -= control.zoomMutation;
      }

      control.zoomValue = Math.min(Math.max(control.minZoom, control.zoomValue), control.maxZoom);

      _update();
    });

    $container.on("contextmenu", () => false);

    $container.on("mousedown", function (e) {
      if ([2, 3].includes(e.which)) {
        $(this).css("cursor", "move");

        control.translate.temp.ready = true;
        control.translate.temp.x = e.pageX;
        control.translate.temp.y = e.pageY;

        e.preventDefault();
      }
    });

    $container.on("mousemove", function (e) {
      if (control.translate.temp.ready) {
        control.translate.x += e.pageX - control.translate.temp.x;
        control.translate.y += e.pageY - control.translate.temp.y;

        _update();

        control.translate.temp.x = e.pageX;
        control.translate.temp.y = e.pageY;
      }
    });

    $container.on("mouseup", function () {
      $(this).css("cursor", "default");

      control.translate.temp.ready = false;
    });
  };

  useEffect(() => {
    const { disconnect } = inspect({
      iframe: () => iframeRef.current,
      url: window.location.origin + "/api/inspect",
    });

    return () => {
      disconnect();
    };
  }, [layout, props.slug]);

  return (
    <>
      <Head>
        <title>{props.meta.title} | XState Catalogue</title>
      </Head>
      <Layout
        content={
          <>
            {imports && (
              <ShowMachinePage
                slug={props.slug}
                machine={imports.machine}
                mdxDoc={imports.mdxDoc}
                fileText={props.fileText}
                meta={props.meta}
                mdxMetadata={imports.mdxMetadata}
              />
            )}
          </>
        }
        iframe={<iframe key="iframe" ref={iframeRef} className="w-full h-full" onLoad={_inject} />}
      />
    </>
  );
};

const Layout = (props: { content: React.ReactNode; iframe: React.ReactNode }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [props.content, props.iframe]);

  return (
    <div>
      <div className="hidden mb-16 bg-black md:block" style={{ height: "calc(100vh - 50px)" }}>
        {props.iframe}
      </div>
      <div>{props.content}</div>
    </div>
  );
};

const ShowMachinePage = (props: {
  machine: StateMachine<any, any, any>;
  mdxDoc: any;
  fileText: string;
  slug: string;
  meta: MetadataItem;
  mdxMetadata?: MDXMetadata;
}) => {
  const service = useInterpret(props.machine, {
    devTools: true,
  });

  return <MachineHelpersContext.Provider value={{ service, metadata: props.mdxMetadata }} />;
};

const machinePathRegex = /\.machine\.ts$/;

export const getStaticPaths: GetStaticPaths = async () => {
  const fs = await import("fs");
  const path = await import("path");

  const machinesPath = path.resolve(process.cwd(), "lib/machines");

  const machines = fs.readdirSync(machinesPath);

  return {
    fallback: false,
    paths: machines
      .filter((machine) => machine.endsWith(".ts"))
      .map((fileName) => {
        return {
          params: {
            id: fileName.replace(machinePathRegex, ""),
          },
        };
      }),
  };
};

export default MachinePage;
