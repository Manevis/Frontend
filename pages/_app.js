import React from "react";
import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "../assets/style/styles.scss";
import Layout from "../components/Layout";
import UserProvider from "../components/_Context_/UserContext";
import ModalProvider from "../components/_Context_/ModalContext";
import SEO from "../components/_SEO_";

export default ({ Component, pageProps }) =>
  pageProps.noLayout ? (
    <main>
      <SEO seo={pageProps.SEO} />
      <Component {...pageProps} />
    </main>
  ) : (
    <UserProvider>
      <ModalProvider>
        <Layout seo={pageProps.SEO}>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </UserProvider>
  );
