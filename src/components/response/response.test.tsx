import { render, screen } from "@testing-library/react";
import Response from "./response";
import type { Message } from "../../types";

describe("Response", () => {
  const message: Message = {
    id: `123`,
    type: `response`,
    time: `10:00`,
    text: `Response text`,
    from: {
      name: `Bot`,
    },
  };

  it("should render response message with time and name", () => {
    render(<Response from={message.from} message={message} />);

    expect(screen.getByText(message.text as string)).toBeInTheDocument();
    expect(screen.getByText(message.time)).toBeInTheDocument();
    expect(screen.getByText(message.from.name)).toBeInTheDocument();
  });
});
