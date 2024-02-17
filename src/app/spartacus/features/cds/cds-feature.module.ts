import { NgModule } from '@angular/core';
import { CdsConfig, CdsModule } from "@spartacus/cds";
import { provideConfig } from "@spartacus/core";

@NgModule({
  declarations: [],
  imports: [
    CdsModule.forRoot()
  ],
  providers: [provideConfig(<CdsConfig>{
    cds: {
      tenant: 'TENANT_PLACEHOLDER',
      baseUrl: 'https://40.76.109.9:9002',
      endpoints: {
        strategyProducts: '/strategy/${tenant}/strategies/${strategyId}/products',
      },
      merchandising: {
        defaultCarouselViewportThreshold: 80,
      },
    },
  }),
  provideConfig(<CdsConfig>{
    cds: {
      profileTag: {
        javascriptUrl:
          'PROFILE_TAG_LOAD_URL_PLACEHOLDER',
        configUrl:
          'PROFILE_TAG_CONFIG_URL_PLACEHOLDER',
        allowInsecureCookies: true,
      },
    },
  })
  ]
})
export class CdsFeatureModule { }
