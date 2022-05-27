/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Link from "next/link";

export default function Meta() {
  return (
    <Head>
      <title>Bennka Landscapes</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Landscape Company" />
      <meta property="og:image" content=".jpg" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:image" content="" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />
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
      <link rel="manifest" href="/site.webmanifest"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
