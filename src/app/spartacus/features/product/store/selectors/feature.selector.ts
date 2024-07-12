import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import {
  ProductsCustomState,
  PRODUCT_CUSTOM_FEATURE,
  StateWithProductCustom,
} from '../product-state';

export const getProductsState: MemoizedSelector<
StateWithProductCustom,
ProductsCustomState
> = createFeatureSelector<ProductsCustomState>(PRODUCT_CUSTOM_FEATURE);
