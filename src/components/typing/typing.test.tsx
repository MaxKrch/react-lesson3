import { render, screen } from "@testing-library/react";
import Typing from "./typing";
import { messages } from "../../consts";

describe("Typing", () => {
  const message = messages[0];
  it("should render textarea with message text", () => {
    render(<Typing from={message.from} message={message} />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveValue(message.text);
  });
});
