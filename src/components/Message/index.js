import { Children } from "react";
import UserInfo from "../UserInfo";
import UniqueId from "../UniqueId";
import CurrentDate from "../CurrentDate";
import "./Message.css";

export default function Message({
  isImportant, message, title, children
}) {
  if (message === "" || message == null) {
    return null;
  }

  let className = "Message";
  if (isImportant) className += " Message--important";

  return (
    <div className={className}>
      <div className="Message__title">{title}</div>
      <div className="Message__text">{message}</div>
      {children}
    </div>
  );
}

function withUserInfo(Component) {
  return function (props) {
    const children = [
      ...Children.toArray(props.children),
      <UserInfo key="user-info" />
    ];

    return <Component {...props}>{children}</Component>;
  };
}

function withUniqueId(Component) {
  return function (props) {
    const children = [
      ...Children.toArray(props.children),
      <UniqueId key="unique-id" />
    ];

    return <Component {...props}>{children}</Component>;
  };
}

function withCurrentDate(Component) {
  return function (props) {
    const children = [
      ...Children.toArray(props.children),
      <CurrentDate key="current-date" />
    ];

    return <Component {...props}>{children}</Component>;
  };
}

export const MessageWithHoc =
  withUserInfo(withUniqueId(withCurrentDate(Message)));
