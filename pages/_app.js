import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import { themes } from "../styles/themes";
import { NativeBaseProvider } from "native-base";

function MyApp({ Component, pageProps }) {
  // Should I add a Head component here for fonts?
  return (
    <NativeBaseProvider theme={themes}>
      <Head>
        <title>Trip The Fan</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
