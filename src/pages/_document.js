import React, {Component, useEffect} from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

import theme from 'assets/themes';
const htmlStyle = { overflowY: 'scroll', overflowX: 'hidden', width: '100%' }
const bodyStyle = { width: '100%', backgroundColor: '#fff' }

const MyDocument = () => {

  return (
      <Html lang="en" style={htmlStyle}>
        <Head>
          <meta name="theme-color" content={theme().palette.primary.main}/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        </Head>
        <body style={bodyStyle}>
        <div id="page-transition"></div>
        <Main />
        <NextScript />
        </body>
      </Html>
  )
}

MyDocument.getInitialProps = async (appContext) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = appContext.renderPage

  appContext.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })

  const initialProps = await Document.getInitialProps(appContext)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}

export default MyDocument;
