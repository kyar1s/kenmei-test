import React, { useState } from 'react';
import Notification from '../components/Notification';
import { NotificacionConfig } from '../components/Notification/Notification';

const DEFAULT_CONFIG = {
  time: 5,
  autoclose: true
};

interface NotificationContextValue {
  status: 'open' | 'closed';
  notify: (msg: string, config?: NotificacionConfig) => void;
}

export const NotificationContext = React.createContext<null | NotificationContextValue>(null);

const NotificationProvider: React.FC = ({ children }) => {
  const [status, setStatus] = useState<'open' | 'closed'>('closed');
  const [config, setConfig] = useState<NotificacionConfig>(DEFAULT_CONFIG);
  const [message, setMessage] = useState<string>('');

  const notify = (msg: string, customConfig?: any) => {
    setConfig(Object.assign(DEFAULT_CONFIG, customConfig));
    setStatus('open');
    setMessage(msg);
  };

  return (
    <NotificationContext.Provider value={{ status, notify }}>
      <Notification {...config} status={status} setStatus={setStatus} message={message} />
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) throw new Error('error notification context');
  return context;
};

export default NotificationProvider;
