import React from "react";
import getConfig from "next/config";
import Head from "next/head";

// @Get .config
const { publicRuntimeConfig } = getConfig();

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
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon-16x16.png"
        />
        <meta name="description" content={`${publicRuntimeConfig.siteDesc}`} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta name="author" content="Indonesia Crypto Network" />
        <link rel="mask-icon" href="/favicon.png" color="#141414" />
        <meta name="msapplication-TileColor" content="#141414" />
        <meta name="theme-color" content="#141414" />
        <meta name="msapplication-navbutton-color" content="#141414" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#141414" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={`${publicRuntimeConfig.siteUrl}`} />
      </Head>

      {/* @Main */}
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
};

export default App;
