import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Cross } from '../icons';
import './Notification.scss';

export interface NotificacionConfig {
  time: number;
  autoclose: boolean;
}

interface Props {
  message: string;
  status: 'open' | 'closed';
  setStatus: Dispatch<SetStateAction<'open' | 'closed'>>;
}

const Notification: React.FC<Props & NotificacionConfig & React.HTMLAttributes<HTMLDivElement>> = ({
  status,
  setStatus,
  message,
  time,
  autoclose
}) => {
  const closeNotification = () => setStatus('closed');

  useEffect(() => {
    if (!autoclose || status === 'closed') return;

    const timeOut = setTimeout(() => {
      setStatus('closed');
    }, time * 1000);

    return () => clearTimeout(timeOut);
  }, [status]);

  if (status === 'closed') return null;

  return (
    <motion.div className="notification p-sm align-center" initial={{ bottom: '-5rem' }} animate={{ bottom: '5rem' }} exit={{ left: '-100%' }}>
      <Cross className="mr-sm" onClick={closeNotification} />
      <p>{message}</p>
    </motion.div>
  );
};

export default Notification;
