import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

// @layouts
import Header from "@layouts/Header";
import Board from "@layouts/Board";
import MentorJudges from "@layouts/MentorJudges";
import Partner from "@layouts/Partner";
import FAQ from "@layouts/FAQ";

const Home = () => {
  // @preline (Add Plugins - Active)
  useEffect(() => {
    import("preline");

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
        <meta property="og:image" content="" />

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
        <meta property="twitter:image" content="" />
      </Head>

      <main>
        {/* Header */}
        <Header />

        <Container>
          {/* Board */}
          <Board />

          {/* Mentor & Judges */}
          <MentorJudges />

          {/* Partner */}
          <Partner />

          {/* @FAQ (Layouts) */}
          <FAQ />
        </Container>
      </main>
    </>
  );
};

export default Home;
