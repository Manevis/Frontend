import React from "react";
import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "../assets/style/styles.scss";
import Layout from "../components/Layout";
import UserProvider from "../components/_Context_/UserContext";

export default ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Layout seo={pageProps.SEO}>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
};
