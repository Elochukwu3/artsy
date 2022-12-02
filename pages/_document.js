import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
        <Head>
        <link href="https://fonts.cdnfonts.com/css/clash-display" rel="stylesheet"/>  
        <style>
      @import url('https://fonts.cdnfonts.com/css/clash-display');
      </style>     
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
    </Html>
  )
}
