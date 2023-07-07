import { Html, Head, Main, NextScript } from 'next/document'

import { getLanguage } from '@/lib/utils'
export default function Document(props: { __NEXT_DATA__: { page: string } }) {
  //console.log(props.__NEXT_DATA__.page);
  const { isArabic } = getLanguage(props.__NEXT_DATA__.page)
  return (
    <Html lang={isArabic ? 'ar' : 'en'} className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://use.typekit.net/wog8heu.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Kufi+Arabic&display=optional"
          rel="stylesheet"
        />
        <link rel="icon" href="/Favicon.svg" />
        <meta name="author" content="Riyadh Air, established by PIF" />
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
