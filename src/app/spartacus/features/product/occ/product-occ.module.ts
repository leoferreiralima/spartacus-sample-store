import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PRODUCT_REVIEW_NORMALIZER, ProductReviewsAdapter } from "@spartacus/core";
import { ProductCustomReviewNormalizer } from "./adapters/converters/product-review-normalizer";
import { JsonPlaceHolderProductReviewsAdapter } from "./adapters/json-place-holder-product-reviews.adapter";

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: PRODUCT_REVIEW_NORMALIZER,
      useExisting: ProductCustomReviewNormalizer,
      multi: true,
    },
    {
      provide: ProductReviewsAdapter,
      useClass: JsonPlaceHolderProductReviewsAdapter,
    },
  ],
})
export class ProductCustomOccModule {}
