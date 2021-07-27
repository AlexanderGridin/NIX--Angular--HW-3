import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeStoreService } from 'src/app/services/fake-store.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public getProductsSub: Subscription | undefined;
  public products!: Product[];
  public activeProductId: number | null = null;

  constructor(private fakeStore: FakeStoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.getProductsSub = <Subscription>this.fakeStore.getProducts().subscribe((products: Product[]): void => {
      this.products = products;
    });
  }

  public findActiveProductById(id: number): Product {
    return <Product>this.products.find(product => product.id === id);
  }

  public handleViewFullInfo(productId: number): void {
    this.activeProductId = productId;
  }
  public handleProductRemove(productId: number): void {
    this.products = <Product[]>this.products.filter((product: Product): boolean => product.id !== productId);
    this.activeProductId = null;
  }

  public modalClose(status: null): void {
    this.activeProductId = status;
  }

}
