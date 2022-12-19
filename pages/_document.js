import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/clash-display"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rouge+Script&family=STIX+Two+Text:wght@500&display=swap"
          rel="stylesheet"
        />
      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
