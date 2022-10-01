import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Copyright from '../components/Copyright';
import PageChange from '../components/PageChange';
import theme from 'assets/themes';

import 'assets/css/nextjs-material-dashboard.css';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading`);
  document.body.classList.add('body-page-transition');
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition')
  );
});
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});

const MyApp = ({ Component, pageProps }) => {
  let Layout;
  if (Component.layout) {
    Layout = Component.layout;
  } else {
    Layout = ({ children }) => {
      return <>{children}</>;
    };
  }

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });

  return (
    <React.Fragment>
      <Head>
        <title>CMS</title>
        <meta name="theme-color" content="#42145f"></meta>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Copyright />
      </ThemeProvider>
    </React.Fragment>
  );
};

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
