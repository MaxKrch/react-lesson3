import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Listing from "./listing";

describe("Component: Listing", () => {
  const validItem = {
    listing_id: 1,
    title: "Valid Item",
    price: "100",
    currency_code: "USD",
    quantity: 5,
    url: "https://example.com",
    MainImage: { url_570xN: "https://example.com/image.jpg" },
  };

  const errorItem = {
    listing_id: 2,
    sku: [],
    error_messages: ["Error loading item"],
  };

  it("should render no items if list is empty", () => {
    render(<Listing items={[]} />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("should render only valid offers", () => {
    const expectedText = validItem.title;
    const notExpectedText = errorItem.error_messages[0];

    render(<Listing items={[validItem, errorItem]} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it("should render correct number of ListingItem components", () => {
    const items = [
      validItem,
      { ...validItem, listing_id: 3, title: "Another Item" },
      errorItem,
      errorItem,
    ];

    render(<Listing items={items} />);

    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("should apply default empty array if items prop is undefined", () => {
    render(<Listing />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
