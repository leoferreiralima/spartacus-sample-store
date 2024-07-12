import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ProductReviewsComponent } from "@spartacus/storefront";

@Component({
  selector: 'cx-product-reviews',
  templateUrl: './product-reviews.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomProductReviewsComponent extends ProductReviewsComponent {

}
