import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const SEO = props => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired
};

export default SEO;
