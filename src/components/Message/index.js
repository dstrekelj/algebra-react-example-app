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
      <div className="Message__author"><UserInfo /></div>
      <div className="Message__id"><UniqueId /></div>
      <div className="Message__date"><CurrentDate /></div>
    </div>
  );
}

function withUserInfo(Component) {
  return function (props) {
    console.log('withUserInfo', props);
    return <Component {...props}>withUserInfo</Component>;
  };
}

function withUniqueId(Component) {
  return function (props) {
    console.log('withUniqueId', props);
    return <Component {...props}>withUniqueId</Component>;
  };
}

function withCurrentDate(Component) {
  return function (props) {
    console.log('withCurrentDate', props);
    return <Component {...props} />;
  };
}

export const MessageWithHoc =
  withUserInfo(withUniqueId(withCurrentDate(Message)));
