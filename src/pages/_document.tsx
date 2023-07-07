import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(props: { __NEXT_DATA__: { page: string } }) {
  //console.log(props.__NEXT_DATA__.page);

  return (
    <Html lang={'en'} className="scroll-smooth">
      <Head>
        <link rel="icon" href="/Favicon.svg" />
        <meta name="author" content="Sumanta Mukherjee" />
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
