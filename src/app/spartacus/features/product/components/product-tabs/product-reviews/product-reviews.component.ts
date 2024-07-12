import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { isNotNullable, ProductReviewService } from "@spartacus/core";
import { CurrentProductService, CustomFormValidators, ProductReviewsComponent } from "@spartacus/storefront";
import { CustomProductReviewService } from "../../../facade/product-review.service";
import { filter, map, distinctUntilChanged, switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'cx-product-reviews',
  templateUrl: './product-reviews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomProductReviewsComponent extends ProductReviewsComponent {

  constructor(
    protected customReviewService: CustomProductReviewService,
    protected override currentProductService: CurrentProductService,
    protected customFb: UntypedFormBuilder,
    protected override cd: ChangeDetectorRef
  ) {

    super(customReviewService, currentProductService, customFb, cd);

    this.reviews$ = this.product$.pipe(
      filter(isNotNullable),
      map((p) => p.code ?? ''),
      distinctUntilChanged(),
      switchMap((productCode) =>
        this.customReviewService.getByProductCodeCustom(productCode)
      ),
      tap(() => {
        this.customResetReviewForm();
        this.maxListItems = this.initialMaxListItems;
      })
    );
  }

  private customResetReviewForm(): void {
    this.reviewForm = this.customFb.group({
      title: ['', Validators.required],
      comment: ['', Validators.required],
      rating: [null, CustomFormValidators.starRatingEmpty],
      reviewerName: '',
    });
  }
}
