import { NgModule } from '@angular/core';
import { provideConfig } from "@spartacus/core";
import { BaseTmsModule, TmsConfig } from "@spartacus/tracking/tms/core";
import { GtmModule } from "@spartacus/tracking/tms/gtm";

@NgModule({
  declarations: [],
  imports: [
    BaseTmsModule.forRoot(),
    GtmModule
  ],
  providers: [provideConfig(<TmsConfig>{
    tagManager: {
      gtm: {
        events: [],
      },
    },
  })]
})
export class TagManagementFeatureModule { }
