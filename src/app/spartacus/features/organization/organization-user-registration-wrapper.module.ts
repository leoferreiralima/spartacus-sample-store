import { NgModule } from '@angular/core';
import { CDCB2BRegisterModule } from "@spartacus/cdc/organization/user-registration";
import { OrganizationUserRegistrationModule } from "@spartacus/organization/user-registration";

@NgModule({
  declarations: [],
  imports: [
    OrganizationUserRegistrationModule,
    CDCB2BRegisterModule
  ]
})
export class OrganizationUserRegistrationWrapperModule { }
