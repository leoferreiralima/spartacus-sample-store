/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Injectable } from '@angular/core';
import { ProductReviewsAdapter, Review } from '@spartacus/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CustomProductReviewsConnector {
  constructor(protected adapter: ProductReviewsAdapter) {}

  get(productCode: string, maxCount?: number): Observable<Review[]> {
    return this.adapter.load(productCode, maxCount);
  }

  add(productCode: string, review: any): Observable<Review> {
    return this.adapter.post(productCode, review);
  }
}
