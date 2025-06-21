import { render, screen } from "@testing-library/react";
import Star from "./star";

describe("Star", () => {
  it("should renders an SVG star with given width and height", () => {
    render(<Star />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
