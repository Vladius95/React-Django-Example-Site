import React from "react";

import "./Message.scss";

interface MessageProps {
  message: string;
  extraClass?: string;
}

function areEqualMessageProps(prevProps: MessageProps, nextProps: MessageProps) {
  return true;
}

export const Message: React.FC<MessageProps> = React.memo(({ message, extraClass }) => {
  return <p className={`message ${extraClass}`}>{message}</p>;
}, areEqualMessageProps);

Message.displayName = "Message";
