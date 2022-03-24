import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import './Button.scss';

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<'button'>;

const Button: React.FC<ButtonAttributes> = ({ children, className, ...props }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} className={clsx('button p-sm', className)} {...props}>
      {children}
    </motion.button>
  );
};

export default Button;
