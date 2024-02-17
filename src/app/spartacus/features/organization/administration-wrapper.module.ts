import { NgModule } from '@angular/core';
import { CdcAdministrationModule } from "@spartacus/cdc/organization/administration";
import { AdministrationModule } from "@spartacus/organization/administration";

@NgModule({
  declarations: [],
  imports: [
    AdministrationModule,
    CdcAdministrationModule
  ]
})
export class AdministrationWrapperModule { }
