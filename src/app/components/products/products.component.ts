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

  readonly LOCAL_PRODUCTS: string = 'products';

  constructor(private fakeStore: FakeStoreService) { }

  ngOnInit(): void {
    this.initProducts();
  }

  public getProductById(id: number): Product {
    return <Product>this.products.find((product: Product): boolean => product.id === id);
  }

  public handleViewFullProduct(productId: number): void {
    this.selectedProductId = productId;
  }
  public handleProductRemove(productId: number): void {
    this.selectedProductId = null;
    this.products = <Product[]>this.products.filter((product: Product): boolean => product.id !== productId);

    localStorage.setItem(this.LOCAL_PRODUCTS, JSON.stringify(this.products));
  }

  public handleModalClose(status: null): void {
    this.selectedProductId = status;
  }

  public loadProductsFromApi(): void {
    this.getProducts();
  }

  public removeAllProducts(): void {
    this.products = [];
    localStorage.setItem(this.LOCAL_PRODUCTS, JSON.stringify([]))
  }

  private getProducts(): void {
    this.getProductsSub = <Subscription>this.fakeStore.getProducts().subscribe((products: Product[]): void => {
      this.products = products;
      localStorage.setItem(this.LOCAL_PRODUCTS, JSON.stringify(products));
    });
  }

  private initProducts(): void {
    const productsFromLocalStorage: string | null = localStorage.getItem(this.LOCAL_PRODUCTS);
    let savedProducts!: Product[];

    if (productsFromLocalStorage) {
      savedProducts = JSON.parse(<string>productsFromLocalStorage);
    }

    if (savedProducts && savedProducts.length >= 0) {
      this.products = savedProducts;
    }

    if (!savedProducts) {
      this.getProducts();
    }
  }
}
