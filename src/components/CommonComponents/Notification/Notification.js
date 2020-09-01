import React from 'react';
import { notification } from 'antd';

const openNotificationWithIcon = function(type, title, description) {
  const notice = notification[type]({
    message: title,
    description: description
  });
  
  return (
    <>
      {notice}
    </>
  )
};

export const Notification = {
  success: function(title, description) {
    openNotificationWithIcon('success', title, description);
  },
  info: function(title, description) {
    openNotificationWithIcon('info', title, description);
  },
  warning: function(title, description) {
    openNotificationWithIcon('warning', title, description);
  },
  error: function(title, description) {
    openNotificationWithIcon('error', title, description);
  },
}

