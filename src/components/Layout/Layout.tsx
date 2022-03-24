import React from "react";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
