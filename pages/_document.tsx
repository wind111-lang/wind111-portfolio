import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheets } from "@mui/styles";

import CssBaseline from '@mui/material/CssBaseline'

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <body className="custom_class">
        <CssBaseline/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getServerSideProps = async (ctx: DocumentContext) =>  {
  const sheets= new ServerStyleSheets();
  const originalRenderPage= ctx.renderPage;
  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App)=> (props)=> sheets.collect(<App {...props} />)
  });
  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  }
}

export default  MyDocument