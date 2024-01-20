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
      // const locoScroll = new locomotiveModule();
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

        {/* Open Graph / Facebook */}
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
          content={`${process.env.NEXT_PUBLIC_UPLOAD_STORAGE}/uploads/ethsea_Thumbnails_app_Share_Link_d44538de2d.jpg`}
        />

        {/* Twitter */}
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
        {/* Header */}
        <Header />

        <Container>
          <div id="ethSeaAbout">
            {/* @Benefit (Layouts) */}
            <Benefit />

            {/* @Board (Layouts) */}
            <Board />
          </div>

          {/* @Timeline */}
          <Timeline />

          <div id="ethSeaPartners">
            {/* @Strategic Partners (Layouts) */}
            <StrategicPartners />

            {/* @Organized by (Layouts) */}
            <Organized />

            {/* @Organized by (Layouts) */}
            <AsPartOf />
          </div>

          {/* @FAQ (Layouts) */}
          <FAQ />
        </Container>
      </main>
    </>
  );
};

export default Home;

// @version 1.24 (Release)
