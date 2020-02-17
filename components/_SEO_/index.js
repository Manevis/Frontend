import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const SEO = ({seo}) => {
  return (
    <Head>
      <title>{seo.title || 'Autor.iR'}</title>
      <meta name="description" content={seo.description || 'مقالات مفید به زبان فارسی در وب سایت Autor.ir'} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author || 'معین علیزاده'} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
};

SEO.propTypes = {
  seo: PropTypes.object.isRequired
};

export default SEO;
