import { CustomProductActions } from "../actions";
import { ProductCustomReviewsState } from "../product-state";


export const initialState: ProductCustomReviewsState = {
  productCode: '',
  list: [],
};

export function reducer(
  state = initialState,
  action: CustomProductActions.ProductReviewsAction
): ProductCustomReviewsState {
  switch (action.type) {
    case CustomProductActions.LOAD_PRODUCT_REVIEWS_SUCCESS: {
      const productCode = action.payload.productCode;
      const list = action.payload.list;

      return {
        ...state,
        productCode,
        list,
      };
    }
  }

  return state;
}

