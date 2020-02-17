import React from "react";
import PropTypes from "prop-types";
import TopMenu from "./TopNav";
import Footer from "./Footer";
import SEO from "../_SEO_";

const Layout = ({children, seo}) => {
  return (
    <>
      <SEO seo={seo} />
      <TopMenu />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  seo: PropTypes.object
};

Layout.defaultProps = {
  seo: {}
};

export default Layout;
