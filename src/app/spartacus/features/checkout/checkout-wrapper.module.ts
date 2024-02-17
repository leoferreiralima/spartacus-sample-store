import { NgModule } from '@angular/core';
import { CheckoutModule } from "@spartacus/checkout/base";
import { DigitalPaymentsModule } from "@spartacus/digital-payments";

@NgModule({
  declarations: [],
  imports: [
    CheckoutModule,
    DigitalPaymentsModule
  ]
})
export class CheckoutWrapperModule { }
