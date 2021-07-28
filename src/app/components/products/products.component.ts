import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeStoreService } from 'src/app/services/fake-store/fake-store.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public getProductsSub!: Subscription;
  public products!: Product[];
  public selectedProductId: number | null = null;

  constructor(private fakeStore: FakeStoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProductById(id: number): Product {
    return <Product>this.products.find((product: Product): boolean => product.id === id);
  }

  public handleViewFullProduct(productId: number): void {
    this.selectedProductId = productId;
  }
  public handleProductRemove(productId: number): void {
    this.products = <Product[]>this.products.filter((product: Product): boolean => product.id !== productId);
    this.selectedProductId = null;
  }

  public handleModalClose(status: null): void {
    this.selectedProductId = status;
  }

  private getProducts(): void {
    this.getProductsSub = <Subscription>this.fakeStore.getProducts().subscribe((products: Product[]): void => {
      this.products = products;
    });
  }
}
