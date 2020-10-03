import React, { useState } from "react";
import { Button } from "../Button";
import { Notification } from "./index";
import { NotificationProps } from "./Notification.types";
import "./notification.stories.scss";

export default {
  title: "Notification",
};

export const Default = () => {
  let [list, setList] = useState<NotificationProps["toastList"]>([]);
  return (
    <div className="notification-container-stories">
      <Button
        type="default"
        onClick={() => {
          setList([
            ...list,
            {
              id: 100,
              title: "Success",
              description: "This is a success toast component",
              backgroundColor: "#5cb85c",
              icon: "",
            },
            {
              id: 10,
              title: "Error",
              description: "This is a success toast component",
              backgroundColor: "#ff7a70",
              icon: "",
            },
          ]);
        }}
      >
        Default
      </Button>
      <Notification
        toastList={list}
        position={"bottom-right"}
        autoDelete={true}
        dismissTime={300000}
      />
    </div>
  );
};
