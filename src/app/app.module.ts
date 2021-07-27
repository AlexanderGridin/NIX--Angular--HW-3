import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FakeStoreService } from './services/fake-store.service';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent } from './components/button/button.component';
import { CutStringPipe } from './pipes/cut-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsComponent,
    ProductCardComponent,
    ContainerComponent,
    ButtonComponent,
    CutStringPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FakeStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }