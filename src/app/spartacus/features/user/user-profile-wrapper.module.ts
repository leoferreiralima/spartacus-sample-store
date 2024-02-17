import { NgModule } from '@angular/core';
import { CDCUserProfileModule } from "@spartacus/cdc/user-profile";
import { UserProfileModule } from "@spartacus/user/profile";

@NgModule({
  declarations: [],
  imports: [
    UserProfileModule,
    CDCUserProfileModule
  ]
})
export class UserProfileWrapperModule { }
