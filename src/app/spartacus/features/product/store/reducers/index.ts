/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { InjectionToken, Provider } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromProductReviews from './product-reviews.reducer';
import { ProductsCustomState } from '../product-state';
import { SiteContextActions } from '@spartacus/core';

export function getReducers(): ActionReducerMap<ProductsCustomState, any> {
  return {
    reviews: fromProductReviews.reducer
  };
}

export const reducerToken: InjectionToken<ActionReducerMap<ProductsCustomState>> =
  new InjectionToken<ActionReducerMap<ProductsCustomState>>('ProductCustomReducers');

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};

export function clearProductsState(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return function (state, action) {
    if (
      action.type === SiteContextActions.CURRENCY_CHANGE ||
      action.type === SiteContextActions.LANGUAGE_CHANGE
    ) {
      state = undefined;
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [clearProductsState];
