import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CmsConfig, ConfigModule, I18nModule, UrlModule } from "@spartacus/core";
import { CarouselModule, MediaModule, PageComponentModule, ProductCarouselModule } from "@spartacus/storefront";
import { CustomProductCarouselComponent } from "./product-carousel.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    MediaModule,
    RouterModule,
    UrlModule,
    I18nModule,
    PageComponentModule,
    ProductCarouselModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductCarouselComponent: {
          component: CustomProductCarouselComponent,
        },
      },
    } as CmsConfig)
  ],
  declarations: [CustomProductCarouselComponent],
  exports: [CustomProductCarouselComponent],
})
export class ProductCustomCarouselModule { }
