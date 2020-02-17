import React from "react";
import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "../assets/style/styles.scss";
import Layout from "../components/Layout";
import UserProvider from "../components/_Context_/UserContext";
import ModalProvider from '../components/_Context_/ModalContext';

export default ({ Component, pageProps }) => (
  <UserProvider>
    <ModalProvider>
      <Layout seo={pageProps.SEO}>
        <Component {...pageProps} />
      </Layout>
    </ModalProvider>
  </UserProvider>
)
