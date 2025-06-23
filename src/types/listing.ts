type Offer = {
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
};

type ErrorOffer = Pick<Offer, "listing_id"> & {
  error_messages: string | string[];
};

export type { Offer, ErrorOffer };
