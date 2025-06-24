import type { MessageProps } from "./message.type";

const Message = ({ message, from }: MessageProps) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
};

export default Message;
