import React from "react";
import { Copyright } from "../../icons";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="content">
        <Copyright fill="#fff" />
        <span className="content--name">Iris Ledesma</span>
      </div>
    </footer>
  );
};

export default Footer;
