import React from "react";
import Head from "next/head";

const MetaTags = ({
  title,
  key,
  description,
}: {
  title: string;
  key?: number;
  description?: string;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="theme-color" content="#6d40e5" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/public/favicon.ico" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta
          name="description"
          content={
            description
              ? description
              : `Find trusted medical personnel close to your location as fast 
as lightning for less than a dollar!`
          }
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iwello.org" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://iwello.org" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="" />
      </Head>
    </>
  );
};

export default MetaTags;
