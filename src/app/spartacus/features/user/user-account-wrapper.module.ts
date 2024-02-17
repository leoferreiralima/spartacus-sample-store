import { NgModule } from '@angular/core';
import { CDCUserAccountModule } from "@spartacus/cdc/user-account";
import { UserAccountModule } from "@spartacus/user/account";

@NgModule({
  declarations: [],
  imports: [
    UserAccountModule,
    CDCUserAccountModule
  ]
})
export class UserAccountWrapperModule { }
