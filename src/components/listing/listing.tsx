import type { ErrorOffer, Offer } from "../../types";
import ListingItem from "../listing-item/listing-item";
import type { ListingProps } from "./listing.type";

const Listing = ({ items = [] }: ListingProps) => {
  const isCorrectOffer = (item: Offer | ErrorOffer): item is Offer =>
    (item as Offer).title !== undefined;

  return (
    <div className="item-list">
      {items.filter(isCorrectOffer).map((item) => (
        <ListingItem key={item.listing_id} item={item} />
      ))}
    </div>
  );
};

export default Listing;
