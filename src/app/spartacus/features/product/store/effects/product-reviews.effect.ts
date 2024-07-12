import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GlobalMessageService, GlobalMessageType, LoggerService, normalizeHttpError, ProductActions } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { CustomProductActions } from '../actions';
import { CustomProductReviewsConnector } from '../../connectors/product-reviews.connector';

@Injectable()
export class ProductCustomReviewsEffects {
  protected logger = inject(LoggerService);
  loadProductReviews$: Observable<
    | CustomProductActions.LoadProductCustomReviewsSuccess
    | CustomProductActions.LoadProductCustomReviewsFail
  > = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomProductActions.LOAD_PRODUCT_REVIEWS),
      map((action: CustomProductActions.LoadProductCustomReviews) => action.payload),
      mergeMap((productCode) => {
        return this.productReviewsConnector.get(productCode).pipe(
          map((data) => {
            return new CustomProductActions.LoadProductCustomReviewsSuccess({
              productCode,
              list: data,
            });
          }),
          catchError((error) =>
            of(
              new CustomProductActions.LoadProductCustomReviewsFail(
                normalizeHttpError(error, this.logger)
              )
            )
          )
        );
      })
    )
  );

  showGlobalMessageOnPostProductReviewFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductActions.POST_PRODUCT_REVIEW_FAIL),
        tap(() => {
          this.globalMessageService.add(
            { key: 'productReview.postReviewFail' },
            GlobalMessageType.MSG_TYPE_ERROR
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private productReviewsConnector: CustomProductReviewsConnector,
    private globalMessageService: GlobalMessageService
  ) {}
}
