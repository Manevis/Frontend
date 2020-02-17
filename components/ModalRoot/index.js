import React, { useEffect } from "react";

import LoginModal from "./Modals/Login.modal";

import { LOGIN_MODAL } from "./constans";
import { ModalContext } from "../_Context_/ModalContext";

const modalsRepository = {
  [LOGIN_MODAL]: LoginModal
};

const ModalRoot = () => {
  const { modals } = React.useContext(ModalContext);

  useEffect(() => {
    document.querySelector("body").style.overflow = modals.length
      ? "hidden"
      : "unset";
  }, [modals]);

  return modals.map(modal => {
    const ModalComponent = modalsRepository[modal.type];

    return <ModalComponent key={modal.type} {...modal.props} />;
  });
};

export default ModalRoot;
