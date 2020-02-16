import React from "react";
import PropTypes from "prop-types";
import TopMenu from "./TopNav";
import Footer from "./Footer";
import SEO from "../_SEO_";

const Layout = props => {
  return (
    <>
      <SEO title={props.title} />
      <TopMenu />
      <main className="container">
        <div className="row">
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired
};

export default Layout;
