import { render, screen } from "@testing-library/react";
import Stars from "./stars";

describe("Stars", () => {
  it("should renders nothing if count is less than 1", () => {
    const { container } = render(<Stars count={0} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should renders nothing if count is greater than 5", () => {
    const { container } = render(<Stars count={6} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should renders correct number of Star components when count is valid", () => {
    const count = 3;
    render(<Stars count={count} />);

    const stars = screen.getAllByRole("listitem");
    expect(stars).toHaveLength(count);

    expect(screen.getByText(`Рейтинг звезд: ${count}`)).toBeInTheDocument();
  });
});
