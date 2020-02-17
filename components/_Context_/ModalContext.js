import React, { useState } from "react";
import PropTypes from "prop-types";

export const ModalContext = React.createContext([]);

const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const showModal = modal => {
    if (Object.keys(modals).find(m => (m.type = modal.type))) {
      return null;
    }

    setModals([...modals, modal]);
  };

  const hideModal = modal => {
    setModals([]);
  };

  const modalActions = {
    showModal,
    hideModal
  };

  return (
    <ModalContext.Provider value={{modals, modalActions}}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalProvider;
