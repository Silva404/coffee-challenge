import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/mvst-logo.svg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="description"
          content="
          We're thrilled that you've made it to our MVST coding challenge! We
          are rooting for your success and hope to meet you in the challenge
          review! 🚀 If you have anything that we can help you with, just open
          an issue in the Github repo that was provided to you."
        />
        <meta name="keywords" content="coffee, mvst, code challenge" />
        <meta name="author" content="Breno Silva" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
