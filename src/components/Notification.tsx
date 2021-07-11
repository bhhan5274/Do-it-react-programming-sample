import React, { FC } from 'react';
import Toast from '../ui/Toast';

export interface NotificationProps {
  message?: string;
  warning?: boolean;
  showMessage?: boolean;
}

const Notification: FC<NotificationProps> = ({ warning, message, showMessage }) => {
  return showMessage ? <Toast message={message} warning={warning} /> : <div />;
};

export default Notification;
