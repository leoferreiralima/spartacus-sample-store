import { NgModule } from '@angular/core';
import { I18nConfig, provideConfig } from "@spartacus/core";
import { dpTranslationChunksConfig, dpTranslations } from "@spartacus/digital-payments/assets";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(<I18nConfig>{
    i18n: {
      resources: dpTranslations,
      chunks: dpTranslationChunksConfig,
    },
  })
  ]
})
export class DigitalPaymentsFeatureModule { }
