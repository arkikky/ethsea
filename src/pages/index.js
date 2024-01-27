import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

// @layouts
import Header from "@layouts/Header";
import Benefit from "@layouts/About";
import Board from "@layouts/Board";
// import MentorJudges from "@layouts/MentorJudges";
import Timeline from "@layouts/Timeline";
import StrategicPartners from "@layouts/StrategicPartners";
import Organized from "@layouts/Organized";
import AsPartOf from "@layouts/AsPartOf";
import FAQ from "@layouts/FAQ";

const Home = () => {
  // @preline (Add Plugins - Active)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      const locoScroll = new locomotiveModule.default({});
    });

    return () => {
      undefined;
    };
  }, []);

  return (
    <>
      {/* Head */}
      <Head>
        <title>{`${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta property="og:type" content="website" />

        {/* @openGraph/facebook */}
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
          content={
            "/assets/images/ethsea_Thumbnails_app_Share_Link_d44538de2d.jpg"
          }
        />

        {/* @twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD_STORAGE}/uploads/ethsea_Thumbnails_app_Share_Link_d44538de2d.jpg`}
        />
      </Head>

      <main className="overflow-hidden">
        {/* @header */}
        <Header />

        <Container>
          <div id="ethSeaAbout">
            {/* @benefit */}
            <Benefit />

            {/* @board */}
            <Board />
          </div>

          {/* @timeline */}
          <Timeline />

          <div id="ethSeaPartners">
            {/* @strategic-partners */}
            <StrategicPartners />

            {/* @organized */}
            <Organized />

            {/* @organized */}
            <AsPartOf />
          </div>

          {/* @fAQ */}
          <FAQ />
        </Container>
      </main>
    </>
  );
};

export default Home;

//LGTM
