import React from "react";
import withProgress from "next-nprogress";
import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "../assets/style/fonts.scss";
import "../assets/style/styles.scss";
import Layout from "../components/Layout";
import UserProvider from "../components/_Context_/UserContext";
import ModalProvider from "../components/_Context_/ModalContext";
import SEO from "../components/_SEO_";

const App = ({ Component, pageProps }) => (
  <UserProvider>
    <ModalProvider>
      <SEO seo={pageProps.SEO} />
      {pageProps.noLayout ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </ModalProvider>
  </UserProvider>
);

export default withProgress(1000)(App)
