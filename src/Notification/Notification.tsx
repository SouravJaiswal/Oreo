import React, { useEffect, useState } from "react";
import { NotificationProps } from "./Notification.types";
import "./notification.scss";

export const Notification = ({
  toastList,
  position,
  autoDelete,
  dismissTime,
}: NotificationProps) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);

    // eslint-disable-next-line
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [toastList, autoDelete, dismissTime, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => (
          <div
            key={i}
            className={`notification toast ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <div
              className="notification-close"
              onClick={() => deleteToast(toast.id)}
            >
              <button>X</button>
            </div>
            <div className="notification-image">{toast.icon}</div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
