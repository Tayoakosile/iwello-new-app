import React from "react";
import Head from "next/head";

const MetaTags = ({
  title,
  key,
  description,
}: {
  title: string;
  key?: number;
  description: string;
}) => {
  return (
    <>
      <Head key={key ? key : 10}>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

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
