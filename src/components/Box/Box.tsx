import { motion } from "framer-motion";
import React from "react";
import "./Box.scss";

const Box: React.FC = ({ children }) => {
  return <motion.div className="box">{children}</motion.div>;
};

export default Box;
