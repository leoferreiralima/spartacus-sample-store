import { NgModule } from '@angular/core';
import { checkoutTranslationChunksConfig, checkoutTranslations } from "@spartacus/checkout/base/assets";
import { CheckoutRootModule, CHECKOUT_FEATURE } from "@spartacus/checkout/base/root";
import { CmsConfig, I18nConfig, provideConfig } from "@spartacus/core";

@NgModule({
  declarations: [],
  imports: [
    CheckoutRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      [CHECKOUT_FEATURE]: {
        module: () =>
          import('./checkout-wrapper.module').then((m) => m.CheckoutWrapperModule),
      },
    }
  }),
  provideConfig(<I18nConfig>{
    i18n: {
      resources: checkoutTranslations,
      chunks: checkoutTranslationChunksConfig,
    },
  })
  ]
})
export class CheckoutFeatureModule { }
