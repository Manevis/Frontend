import React from "react";

import LoginModal from "./Modals/Login.modal";

import { LOGIN_MODAL } from "./constans";
import { ModalContext } from "../_Context_/ModalContext";

const modalsRepository = {
  [LOGIN_MODAL]: LoginModal
};

const ModalRoot = () => {
  const [modals] = React.useContext(ModalContext);

  return modals.map(modal => {
    const ModalComponent = modalsRepository[modal.type];

    return <ModalComponent key={modal.type} {...modal.props} />;
  });
};

export default ModalRoot;
