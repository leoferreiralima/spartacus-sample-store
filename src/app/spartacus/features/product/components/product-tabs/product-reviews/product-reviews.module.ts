import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { I18nModule, provideDefaultConfig, CmsConfig } from "@spartacus/core";
import { StarRatingModule, FormErrorsModule } from "@spartacus/storefront";
import { CustomProductReviewsComponent } from "./product-reviews.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    I18nModule,
    StarRatingModule,
    FormErrorsModule
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        ProductReviewsTabComponent: {
          component: CustomProductReviewsComponent,
        },
      },
    }),
  ],
  declarations: [CustomProductReviewsComponent],
  exports: [CustomProductReviewsComponent],
})
export class ProductCustomReviewsModule {}
