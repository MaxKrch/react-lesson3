import { render, screen } from "@testing-library/react";
import Message from "./message";
import type { Message as MessageType } from "../../types";

describe("Response", () => {
  const message: MessageType = {
    id: `777`,
    type: `message`,
    time: `12:12`,
    text: `Message text`,
    from: {
      name: `Max`,
    },
  };

  it("should render response message with time and name", () => {
    render(<Message from={message.from} message={message} />);

    expect(screen.getByText(message.text as string)).toBeInTheDocument();
    expect(screen.getByText(message.time)).toBeInTheDocument();
    expect(screen.getByText(message.from.name)).toBeInTheDocument();
  });
});
