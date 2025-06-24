import { render, screen } from "@testing-library/react";
import MessageHistory from "./message-history";
import type { Message as MessageType } from "../../types";

describe("MessageHistory", () => {
  const message: MessageType = {
    id: "1",
    type: "message",
    from: { name: "Max" },
    text: "Hello",
    time: "10:00",
  };

  const response: MessageType = {
    id: "2",
    type: "response",
    from: { name: "Bot" },
    text: "Hi!",
    time: "10:01",
  };

  const typing: MessageType = {
    id: "3",
    type: "typing",
    from: { name: "Max" },
    text: "Typing...",
    time: `10:05`,
  };

  const list = [message, response, typing];

  it("should render nothing when list is empty", () => {
    const { container } = render(<MessageHistory list={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render message, response, and typing items", () => {
    render(<MessageHistory list={list} />);

    expect(screen.getByText(message.text as string)).toBeInTheDocument();
    expect(screen.getByText(response.text as string)).toBeInTheDocument();
    expect(screen.getByDisplayValue(typing.text as string)).toBeInTheDocument();
  });

  it(`shouls render correct count items`, () => {
    render(<MessageHistory list={list} />);

    const allItems = screen.getAllByRole(`listitem`);
    expect(allItems.length).toBe(list.length);
  });
});
