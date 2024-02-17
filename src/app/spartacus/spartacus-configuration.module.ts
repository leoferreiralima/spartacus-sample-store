import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, RouteConfig, RoutingConfig, SiteContextConfig} from "@spartacus/core";
import { defaultB2bOccConfig } from "@spartacus/setup";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://40.76.109.9:9002',
      }
    },
  }), provideConfig(
    <SiteContextConfig>{}
  ), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '6.8'
    }
  }), provideConfig(
    defaultB2bOccConfig
  ), provideConfig(
    <RoutingConfig> {
      routing: {
        protected: undefined
      }
    }
  )
]
})
export class SpartacusConfigurationModule { }
