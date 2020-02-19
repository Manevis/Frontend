import React from "react";
import TopMenu from "./TopNav";
import Footer from "./Footer";
import ModalRoot from "../ModalRoot";

const Layout = ({ children }) => {
  return (
    <>
      <ModalRoot />
      <TopMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
