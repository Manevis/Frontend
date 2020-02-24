import React from "react";
import PropTypes from "prop-types";

const Logo = ({ withText, ...otherProps }) => {
  return (
    <img
      src={withText ? "/logo-with-text.png" : "/logo.png"}
      alt="مانویس"
      {...otherProps}
    />
  );
};

Logo.propTypes = {
  withText: PropTypes.bool
};

Logo.defaultProps = {
  withText: false
};

export default Logo;
