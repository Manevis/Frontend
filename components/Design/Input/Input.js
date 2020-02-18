import React from "react";
import styles from "./Input.module.scss";
import cs from "classnames";
import PropTypes from "prop-types";

const Input = props => {
  const { fullWidth, className, ...otherProps } = props;
  return (
    <input
      className={cs(className, styles.input, fullWidth && styles.fullWidth)}
      {...otherProps}
    />
  );
};

Input.propTypes = {
  fullWidth: PropTypes.bool
};

Input.defaultProps = {
  fullWidth: false
};

export default Input;
