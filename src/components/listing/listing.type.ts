import type { ErrorOffer, Offer } from "../../types";

type ListingProps = {
  items?: (Offer | ErrorOffer)[];
};

export type { ListingProps };
