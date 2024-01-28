import React from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @style-css (global)
import "@styles/globals.css";

// @components
import Layouts from "@layouts/Layouts";

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* @head */}
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon.png"
          sizes="any"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <meta name="description" content={`${publicRuntimeConfig.siteDesc}`} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta name="author" content="Indonesia Crypto Network" />

        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />

        {/* @openGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD_STORAGE}/uploads/ethsea_Thumbnails_app_Share_Link_0da272e44b.jpg`}
        />

        <link rel="mask-icon" href="/favicon.png" color="#141414" />
        <meta name="msapplication-TileColor" content="#141414" />
        <meta name="theme-color" content="#141414" />
        <meta name="msapplication-navbutton-color" content="#141414" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#141414" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={`${publicRuntimeConfig.siteUrl}`} />
      </Head>

      {/* @main */}
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
};

export default App;
