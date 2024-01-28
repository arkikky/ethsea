import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";
import StructuredData from "@components/StructuredData";

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
  // @structuredData (Event)
  const strctredEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ETH Sea",
    startDate: "2024-04-01T06:00:00-05:00",
    endDate: "2024-05-30T07:00-05:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "VirtualLocation",
      url: "https://www.ethsea.com/",
    },
    image: [
      `${process.env.NEXT_PUBLIC_UPLOAD_STORAGE}/uploads/ethsea_Thumbnails_app_Share_Link_d44538de2d.jpg`,
    ],
    description:
      "ETH South East Asia (SEA) taps into the rich talent pool within emerging markets through an online hackathon coupled with IRL workshops.",
    offers: {
      "@type": "Offer",
      url: "https://www.ethsea.com/",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2024-02-01T12:00",
    },
    organizer: {
      "@type": "Organization",
      name: "Indonesia Crypto Network",
      url: "https://indonesiacrypto.network",
    },
    performer: {
      "@type": "Person",
      name: "ETH Sea",
    },
  };

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
      {/* @structuredData */}
      <StructuredData data={strctredEvent} />

      {/* @head */}
      <Head>
        <title>{`${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

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
          content={`${process.env.NEXT_PUBLIC_UPLOAD_STORAGE}/uploads/ethsea_Thumbnails_app_Share_Link_d44538de2d.jpg`}
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
