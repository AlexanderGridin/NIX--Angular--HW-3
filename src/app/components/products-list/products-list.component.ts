import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeStoreService } from 'src/app/services/fake-store.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public getProductsSub: Subscription | undefined;
  public products: Product[] | undefined;

  constructor(private fakeStore: FakeStoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.getProductsSub = <Subscription>this.fakeStore.getProducts().subscribe((products: Product[]): void => {
      this.products = products;
    });
  }

}
