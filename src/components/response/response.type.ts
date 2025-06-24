import type { Message } from "../../types";

type ResponseProps = {
  from: Message[`from`];
  message: Message;
};

export type { ResponseProps };
