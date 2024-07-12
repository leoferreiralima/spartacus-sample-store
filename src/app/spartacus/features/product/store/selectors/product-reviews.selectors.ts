import { createSelector, MemoizedSelector } from '@ngrx/store';
import { Review } from '@spartacus/core';
import { getProductsState } from './feature.selector';
import { ProductCustomReviewsState, ProductsCustomState, StateWithProductCustom } from '../product-state';

export const getProductCustomReviewsState: MemoizedSelector<
  StateWithProductCustom,
  ProductCustomReviewsState
> = createSelector(getProductsState, (state: ProductsCustomState) => state.reviews);

export const getSelectedProductCustomReviewsFactory = (
  productCode: string
): MemoizedSelector<StateWithProductCustom, Review[] | undefined> => {
  return createSelector(getProductCustomReviewsState, (reviewData) => {
    if (reviewData.productCode === productCode) {
      return reviewData.list;
    }
    return undefined;
  });
};
