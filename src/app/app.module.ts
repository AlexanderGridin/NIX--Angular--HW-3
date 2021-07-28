import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FakeStoreService } from './services/fake-store/fake-store.service';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent } from './components/button/button.component';
import { SliceStringPipe } from './pipes/slice-string/slice-string.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ProductComponent } from './components/product/product.component';
import { ResponsiveImageComponent } from './components/responsive-image/responsive-image.component';
import { PriceComponent } from './components/price/price.component';
import { BadgeComponent } from './components/badge/badge.component';
import { FormatPricePipe } from './pipes/format-price/format-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsComponent,
    ProductCardComponent,
    ContainerComponent,
    ButtonComponent,
    SliceStringPipe,
    ModalComponent,
    PageTitleComponent,
    ProductComponent,
    ResponsiveImageComponent,
    PriceComponent,
    BadgeComponent,
    FormatPricePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FakeStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
