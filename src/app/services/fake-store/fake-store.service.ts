import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable()
export class FakeStoreService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl: string = 'https://fakestoreapi.com';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
}
