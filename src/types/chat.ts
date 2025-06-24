type Message = {
  id: string;
  from: {
    name: string;
  };
  type: `response` | `message` | `typing`;
  time: string;
  text?: string;
};

export type { Message };
