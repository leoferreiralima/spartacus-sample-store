import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProductReviewService, Review, StateWithProduct } from '@spartacus/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CustomProductActions } from '../store/actions';
import { CustomProductSelectors } from '../store/selectors';
import { StateWithProductCustom } from '../store/product-state';

@Injectable({
  providedIn: 'root',
})
export class CustomProductReviewService extends ProductReviewService {

  constructor(
    protected override store: Store<StateWithProduct>,
    protected customStore: Store<StateWithProductCustom>
  ) {
    super(store);
  }

  getByProductCodeCustom(productCode: string): Observable<Review[]> {

    console.log("Teste", productCode);
    return this.customStore.pipe(
      select(CustomProductSelectors.getSelectedProductCustomReviewsFactory(productCode)),
      tap((reviews) => {
        if (reviews === undefined && productCode !== undefined) {
          this.store.dispatch(
            new CustomProductActions.LoadProductCustomReviews(productCode)
          );
        }
      }),
      map((reviews) => reviews ?? [])
    );
  }
}
