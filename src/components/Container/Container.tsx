import React from "react";
import { motion } from "framer-motion";
import "./Container.scss";

const Container: React.FC = ({ children }) => {
  return <motion.div className="container">{children}</motion.div>;
};

export default Container;
