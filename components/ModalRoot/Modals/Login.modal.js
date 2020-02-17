import React from 'react';
import PropTypes from 'prop-types';
import ModalComponent from '../Modal';
import { LOGIN_MODAL } from '../constans';

const LoginModal = props => {
  return (
    <ModalComponent type={LOGIN_MODAL}>
      Salaaaaaaaaam
    </ModalComponent>
  );
};

LoginModal.propTypes = {

};

export default LoginModal;
