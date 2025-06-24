import Message from "../message";
import Response from "../response";
import Typing from "../typing";
import type { MessageHistoryProps } from "./message-history.type";

const componentMap = {
  message: Message,
  response: Response,
  typing: Typing,
} as const;

const MessageHistory = ({ list = [] }: MessageHistoryProps) => {
  if (list.length === 0) return null;

  return (
    <div className="chat">
      <ul className="chat-history">
        {list.map((item) => {
          const Component = componentMap[item.type];

          return Component ? (
            <Component key={item.id} from={item.from} message={item} />
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default MessageHistory;
