/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService, ConverterService, Review, Occ, PRODUCT_REVIEW_NORMALIZER, PRODUCT_REVIEW_SERIALIZER, OccProductReviewsAdapter } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomOcc } from '../occ-models';

@Injectable()
export class JsonPlaceHolderProductReviewsAdapter extends OccProductReviewsAdapter  {
  constructor(
    protected override http: HttpClient,
    protected override occEndpoints: OccEndpointsService,
    protected override converter: ConverterService
  ) {
    super(http, occEndpoints, converter);
  }

  override load(_: string, maxCount?: number): Observable<Review[]> {
    return this.http
      .get<CustomOcc.Review[]>("https://jsonplaceholder.typicode.com/comments")
      .pipe(
        map((reviews) => reviews ?? []),
        map((reviews) => reviews.slice(maxCount ?? 10)),
        this.converter.pipeableMany(PRODUCT_REVIEW_NORMALIZER)
      );
  }

}
