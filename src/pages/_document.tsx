import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-lightGray text-darkBlue dark:bg-midnight dark:text-lightGray">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
