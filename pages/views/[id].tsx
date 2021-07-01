import { inspect } from '@xstate/inspect';
import { useInterpret } from '@xstate/react';
import { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { StateMachine } from 'xstate';
import { useLayout } from '../../lib/GlobalState';
import { MachineHelpersContext, MDXMetadata } from '../../lib/MachineHelpers';
import { metadata, MetadataItem } from '../../lib/metadata';

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
  const fs = await import('fs');
  const path = await import('path');

  const machinesPath = path.resolve(
    process.cwd(),
    'lib/machines',
    `${params.id}.machine.ts`,
  );

  const meta = metadata[params.id];

  if (!meta) {
    throw new Error(
      `Could not find metadata for ${params.id}. Go to lib/metadata.ts to fix.`,
    );
  }

  return {
    props: {
      slug: params.id as string,
      fileText: fs.readFileSync(machinesPath).toString(),
      meta,
    },
  };
};

const MachinePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props,
) => {
  const layout = useLayout();
  const imports = useGetImports(props.slug, [layout]);

  const iframeRef = useRef(null);
  useEffect(() => {
    const { disconnect } = inspect({
      iframe: () => iframeRef.current,
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
        iframe={
          <iframe key="iframe" ref={iframeRef} className="w-full h-full" />
        }
      />
    </>
  );
};

const Layout = (props: {
  content: React.ReactNode;
  iframe: React.ReactNode;
}) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [props.content, props.iframe]);

  return (
    <div>
      <div
        className="hidden mb-16 bg-black md:block"
        style={{ height: 'calc(100vh - 50px)' }}
      >
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

  return (
    <MachineHelpersContext.Provider
      value={{ service, metadata: props.mdxMetadata }}
    />
  );
};

const machinePathRegex = /\.machine\.ts$/;

export const getStaticPaths: GetStaticPaths = async () => {
  const fs = await import('fs');
  const path = await import('path');

  const machinesPath = path.resolve(process.cwd(), 'lib/machines');

  const machines = fs.readdirSync(machinesPath);

  return {
    fallback: false,
    paths: machines
      .filter((machine) => machine.endsWith('.ts'))
      .map((fileName) => {
        return {
          params: {
            id: fileName.replace(machinePathRegex, ''),
          },
        };
      }),
  };
};

export default MachinePage;
