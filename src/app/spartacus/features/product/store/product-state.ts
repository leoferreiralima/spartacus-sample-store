import { Review } from "@spartacus/core";

export const PRODUCT_CUSTOM_FEATURE = 'productCustom';
export const PRODUCT_CUSTOM_DETAIL_ENTITY = '[ProductCustom] Detail Entity';

export interface StateWithProductCustom {
  [PRODUCT_CUSTOM_FEATURE]: ProductsCustomState;
}

export interface ProductsCustomState {
  reviews: ProductCustomReviewsState;
}

export interface ProductCustomReviewsState {
  productCode: string;
  list: Review[];
}
