import { render, screen } from "@testing-library/react";
import ListingItem from "./listing-item";
import type { Offer } from "../../types";

describe("Component: ListingItem", () => {
  const baseItem: Offer = {
    listing_id: 1,
    title: "Test Product",
    price: "25",
    currency_code: "USD",
    quantity: 8,
    url: "https://example.com",
    MainImage: { url_570xN: "https://example.com/image.jpg" },
  };

  it("should render short title as-is", () => {
    const expectedTitle = "Short Title";
    render(
      <ListingItem
        item={{
          ...baseItem,
          title: expectedTitle,
        }}
      />,
    );

    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
  });

  it('should truncate long title to 50 characters and append "..."', () => {
    const longTitle = "A".repeat(60);
    const expectedTitle = `${"A".repeat(50)}...`;

    render(
      <ListingItem
        item={{
          ...baseItem,
          title: longTitle,
        }}
      />,
    );

    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
  });

  it("should format price with $ for USD", () => {
    const expectedPrice = "$42";

    render(
      <ListingItem
        item={{
          ...baseItem,
          price: "42",
          currency_code: "USD",
        }}
      />,
    );

    expect(screen.getByText(expectedPrice)).toBeInTheDocument();
  });

  it("should format price with € for EUR", () => {
    const expectedPrice = "€42";

    render(
      <ListingItem
        item={{
          ...baseItem,
          price: "42",
          currency_code: "EUR",
        }}
      />,
    );

    expect(screen.getByText(expectedPrice)).toBeInTheDocument();
  });

  it("should format price with currency code suffix for other currencies", () => {
    const expectedPrice = "42 JPY";

    render(
      <ListingItem
        item={{
          ...baseItem,
          price: "42",
          currency_code: "JPY",
        }}
      />,
    );
    expect(screen.getByText(expectedPrice)).toBeInTheDocument();
  });

  it('should apply "level-low" class for quantity <= 10', () => {
    const expectedClassses = "item-quantity level-low";

    render(
      <ListingItem
        item={{
          ...baseItem,
          quantity: 5,
        }}
      />,
    );

    const quantityElement = screen.getByText("5 left");
    expect(quantityElement).toHaveClass(expectedClassses);
  });

  it('should apply "level-medium" class for quantity between 11 and 20', () => {
    const expectedClassses = "item-quantity level-medium";
    render(
      <ListingItem
        item={{
          ...baseItem,
          quantity: 15,
        }}
      />,
    );

    const quantityElement = screen.getByText("15 left");
    expect(quantityElement).toHaveClass(expectedClassses);
  });

  it('should apply "level-high" class for quantity > 20', () => {
    const expectedClassses = "item-quantity level-high";

    render(
      <ListingItem
        item={{
          ...baseItem,
          quantity: 25,
        }}
      />,
    );

    const quantityElement = screen.getByText("25 left");
    expect(quantityElement).toHaveClass(expectedClassses);
  });

  it("should render image with correct src", () => {
    render(<ListingItem item={baseItem} />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", baseItem.MainImage.url_570xN);
  });

  it("should link to the correct URL", () => {
    render(<ListingItem item={baseItem} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", baseItem.url);
  });
});
