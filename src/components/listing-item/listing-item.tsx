import type { ListingItemProps } from "./listing-item.type";

function formatTitle(title: string): string {
  return title.length > 50 ? `${title.slice(0, 50)}...` : title;
}

function formatPrice(price: string, currency: string): string {
  switch (currency) {
    case "USD":
      return `$${price}`;
    case "EUR":
      return `€${price}`;
    default:
      return `${price} ${currency}`;
  }
}

function getQuantityClass(quantity: number): string {
  if (quantity <= 10) return "item-quantity level-low";
  if (quantity <= 20) return "item-quantity level-medium";
  return "item-quantity level-high";
}

const ListingItem = ({ item }: ListingItemProps) => {
  const title = formatTitle(item.title);
  const price = formatPrice(item.price, item.currency_code);
  const activeClass = getQuantityClass(item.quantity);

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{price}</p>
        <p className={activeClass}>{`${item.quantity} left`}</p>
      </div>
    </div>
  );
};

export default ListingItem;
