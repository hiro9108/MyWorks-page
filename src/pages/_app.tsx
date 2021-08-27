import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="My Works" />
        <meta property="og:title" content="My Works" key="title" />
        <title>My Works</title>
      </Head>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
export default MyApp;
