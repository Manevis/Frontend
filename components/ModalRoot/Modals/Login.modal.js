import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalComponent from "../Modal";
import { LOGIN_MODAL } from "../constans";
import { HttpPost } from "../../../utils/request";

const LoginModal = props => {
  const [email, setEmail] = useState("");

  const handleChange = ({ target }) => {
    setEmail(target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const result = await HttpPost("users", {
      email
    });

    console.log(result);
  };

  return (
    <ModalComponent type={LOGIN_MODAL} title="ثبت نام / ورود">
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />

        <button type="submit">ورود</button>
      </form>
    </ModalComponent>
  );
};

LoginModal.propTypes = {};

export default LoginModal;
