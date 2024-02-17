import { NgModule } from '@angular/core';
import { AnonymousConsentsModule, AuthModule, CostCenterOccModule, ExternalRoutesModule, ProductModule, ProductOccModule, UserModule, UserOccModule } from "@spartacus/core";
import { AddressBookModule, AnonymousConsentManagementBannerModule, AnonymousConsentsDialogModule, BannerCarouselModule, BannerModule, BreadcrumbModule, CategoryNavigationModule, CmsParagraphModule, ConsentManagementModule, FooterNavigationModule, HamburgerMenuModule, HomePageEventModule, LinkModule, LoginRouteModule, LogoutModule, MyCouponsModule, MyInterestsModule, NavigationEventModule, NavigationModule, NotificationPreferenceModule, PageTitleModule, PaymentMethodsModule, PDFModule, ProductCarouselModule, ProductDetailsPageModule, ProductFacetNavigationModule, ProductImagesModule, ProductIntroModule, ProductListingPageModule, ProductListModule, ProductPageEventModule, ProductReferencesModule, ProductSummaryModule, ProductTabsModule, ScrollToTopModule, SearchBoxModule, SiteContextSelectorModule, StockNotificationModule, TabParagraphContainerModule, VideoModule } from "@spartacus/storefront";
import { UserFeatureModule } from './features/user/user-feature.module';
import { CartBaseFeatureModule } from './features/cart/cart-base-feature.module';
import { CartSavedCartFeatureModule } from './features/cart/cart-saved-cart-feature.module';
import { WishListFeatureModule } from './features/cart/wish-list-feature.module';
import { CartQuickOrderFeatureModule } from './features/cart/cart-quick-order-feature.module';
import { CartImportExportFeatureModule } from './features/cart/cart-import-export-feature.module';
import { OrderFeatureModule } from './features/order/order-feature.module';
import { CheckoutFeatureModule } from './features/checkout/checkout-feature.module';
import { PersonalizationFeatureModule } from './features/tracking/personalization-feature.module';
import { TagManagementFeatureModule } from './features/tracking/tag-management-feature.module';
import { PdfinvoicesModuleFeatureModule } from './features/pdf-invoices/pdfinvoices-module-feature.module';
import { RequestedDeliveryDateModuleFeatureModule } from './features/requested-delivery-date/requested-delivery-date-module-feature.module';
import { OrganizationUserRegistrationFeatureModule } from './features/organization/organization-user-registration-feature.module';
import { OrganizationAdministrationFeatureModule } from './features/organization/organization-administration-feature.module';
import { ProductConfiguratorFeatureModule } from './features/product-configurator/product-configurator-feature.module';
import { StoreFinderFeatureModule } from './features/storefinder/store-finder-feature.module';
import { SegmentRefsFeatureModule } from './features/segment-refs/segment-refs-feature.module';
import { EpdVisualizationFeatureModule } from './features/epd-visualization/epd-visualization-feature.module';
import { DigitalPaymentsFeatureModule } from './features/digital-payments/digital-payments-feature.module';
import { CdsFeatureModule } from './features/cds/cds-feature.module';
import { CdcFeatureModule } from './features/cdc/cdc-feature.module';
import { CustomerTicketingFeatureModule } from './features/customer-ticketing/customer-ticketing-feature.module';
import { SmartEditFeatureModule } from './features/smartedit/smart-edit-feature.module';
import { QualtricsFeatureModule } from './features/qualtrics/qualtrics-feature.module';
import { ProductFutureStockFeatureModule } from './features/product/product-future-stock-feature.module';
import { ProductVariantsFeatureModule } from './features/product/product-variants-feature.module';
import { ProductImageZoomFeatureModule } from './features/product/product-image-zoom-feature.module';
import { PickupInStoreFeatureModule } from './features/pickup-in-store/pickup-in-store-feature.module';
import { AsmFeatureModule } from './features/asm/asm-feature.module';

@NgModule({
  declarations: [],
  imports: [
    AuthModule.forRoot(),
    LogoutModule,
    LoginRouteModule,
    HamburgerMenuModule,
    SiteContextSelectorModule,
    LinkModule,
    BannerModule,
    CmsParagraphModule,
    TabParagraphContainerModule,
    BannerCarouselModule,
    CategoryNavigationModule,
    NavigationModule,
    FooterNavigationModule,
    BreadcrumbModule,
    ScrollToTopModule,
    PageTitleModule,
    VideoModule,
    PDFModule,
    UserModule,
    UserOccModule,
    AddressBookModule,
    PaymentMethodsModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    StockNotificationModule,
    ConsentManagementModule,
    MyCouponsModule,
    AnonymousConsentsModule.forRoot(),
    AnonymousConsentsDialogModule,
    AnonymousConsentManagementBannerModule,
    ProductModule.forRoot(),
    ProductOccModule,
    ProductDetailsPageModule,
    ProductListingPageModule,
    ProductListModule,
    SearchBoxModule,
    ProductFacetNavigationModule,
    ProductTabsModule,
    ProductCarouselModule,
    ProductReferencesModule,
    ProductImagesModule,
    ProductSummaryModule,
    ProductIntroModule,
    CostCenterOccModule,
    NavigationEventModule,
    HomePageEventModule,
    ProductPageEventModule,
    ExternalRoutesModule.forRoot(),
    UserFeatureModule,
    CartBaseFeatureModule,
    CartSavedCartFeatureModule,
    WishListFeatureModule,
    CartQuickOrderFeatureModule,
    CartImportExportFeatureModule,
    OrderFeatureModule,
    CheckoutFeatureModule,
    PersonalizationFeatureModule,
    TagManagementFeatureModule,
    PdfinvoicesModuleFeatureModule,
    RequestedDeliveryDateModuleFeatureModule,
    OrganizationUserRegistrationFeatureModule,
    OrganizationAdministrationFeatureModule,
    ProductConfiguratorFeatureModule,
    StoreFinderFeatureModule,
    SegmentRefsFeatureModule,
    EpdVisualizationFeatureModule,
    DigitalPaymentsFeatureModule,
    CdsFeatureModule,
    CdcFeatureModule,
    CustomerTicketingFeatureModule,
    SmartEditFeatureModule,
    QualtricsFeatureModule,
    ProductFutureStockFeatureModule,
    ProductVariantsFeatureModule,
    ProductImageZoomFeatureModule,
    PickupInStoreFeatureModule,
    AsmFeatureModule
  ]
})
export class SpartacusFeaturesModule { }
