import { Action } from '@ngrx/store';
import { ErrorModel, Review } from '@spartacus/core';

export const LOAD_PRODUCT_REVIEWS = '[ProductCustom] Load Product Reviews Data';
export const LOAD_PRODUCT_REVIEWS_FAIL = '[ProductCustom] Load Product Reviews Data Fail';
export const LOAD_PRODUCT_REVIEWS_SUCCESS = '[ProductCustom] Load Product Reviews Data Success';


export class LoadProductCustomReviews implements Action {
  readonly type = LOAD_PRODUCT_REVIEWS;
  constructor(public payload: string) {}
}

export class LoadProductCustomReviewsFail implements Action {
  readonly type = LOAD_PRODUCT_REVIEWS_FAIL;
  constructor(public payload?: ErrorModel) {}
}

export class LoadProductCustomReviewsSuccess implements Action {
  readonly type = LOAD_PRODUCT_REVIEWS_SUCCESS;
  constructor(public payload: { productCode: string; list: Review[] }) {}
}

// action types
export type ProductReviewsAction =
  | LoadProductCustomReviews
  | LoadProductCustomReviewsFail
  | LoadProductCustomReviewsSuccess
