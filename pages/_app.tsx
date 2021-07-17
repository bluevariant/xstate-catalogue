import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import "../styles/atom-one-dark.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Visual Yaml</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
