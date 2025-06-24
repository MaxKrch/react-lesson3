import type { TypingProps } from "./typing.type";

const Typing = ({ message, from }: TypingProps) => {
  return (
    <li className="clearfix">
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
      </div>
      <form action="#" className="chat-message">
        <textarea name="new-message">{message.text}</textarea>
      </form>
    </li>
  );
};

export default Typing;
