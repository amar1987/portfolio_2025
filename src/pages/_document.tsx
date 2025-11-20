import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <GoogleAnalytics gaId="G-PF1VZXCWT9" />
      </Head>        <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
