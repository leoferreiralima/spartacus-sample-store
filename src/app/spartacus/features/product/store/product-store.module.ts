import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { effects } from './effects';
import { PRODUCT_CUSTOM_FEATURE } from './product-state';
import { metaReducers, reducerProvider, reducerToken } from './reducers';
import { provideDefaultConfigFactory, StateConfig, StateTransferType } from '@spartacus/core';


export function productStoreConfigFactory(): StateConfig {
  const config: StateConfig = {
    state: {
      ssrTransfer: {
        keys: { [PRODUCT_CUSTOM_FEATURE]: StateTransferType.TRANSFER_STATE },
      },
    },
  };
  return config;
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PRODUCT_CUSTOM_FEATURE, reducerToken, { metaReducers }),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    provideDefaultConfigFactory(productStoreConfigFactory),
    reducerProvider,
  ],
})
export class ProductCustomStoreModule {}
