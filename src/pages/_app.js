import React from "react";
import Head from "next/head";

// @CSS Style (Global)
import "@styles/globals.css";

// @components
import Layouts from "@layouts/Layouts";

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* @Head */}
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" /> */}
        {/* <link
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
        /> */}
        <meta
          name="description"
          content="The go-to solution for global cryptocurrency web3 brands looking to grow in Indonesia."
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <meta name="author" content="ETHSea" />
        <link rel="mask-icon" href="/favicon.svg" color="#141414" />
        <meta name="msapplication-TileColor" content="#141414" />
        <meta name="theme-color" content="#141414" />
        <meta name="msapplication-navbutton-color" content="#141414" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#141414" />
        {/* <link rel="manifest" href="/manifest.json" /> */}

        <link rel="canonical" href="" />
      </Head>

      {/* @Main */}
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
};

export default App;
