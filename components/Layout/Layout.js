import React from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import ModalRoot from "../ModalRoot";

const Layout = ({ children, backTo }) => {
  return (
    <>
      <ModalRoot />
      <TopNav backTo={backTo} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
