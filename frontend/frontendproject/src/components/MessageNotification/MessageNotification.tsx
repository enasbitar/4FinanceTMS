import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { transform } from "typescript";

type MessageNotificationProp = {
  messageType: string;
  messageText: string;
};
function MessageNotification(props: MessageNotificationProp) {
  const notify = (messageText: string, messageType: string) => {
    if (messageType === "success") {
      toast.success(messageText);
    } else if (messageType === "error") {
      toast.error(messageText);
    }
  };
  return (
    <>
      {notify(props.messageType, props.messageText)}
      <ToastContainer limit={1} pauseOnFocusLoss={false} />
    </>
  );
}

export default MessageNotification;
