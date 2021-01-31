import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../styles";

function MyApp({ Component, pageProps }) {
  console.log("app.props...", pageProps);
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
        <title>Covid-19 vaccinations Tracker</title>
        <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
