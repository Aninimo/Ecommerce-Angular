import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product/product.module';

const STORE_BASE_URL = 'https://df4d3847-ae15-4d50-b40c-0dbd5c6a7b86-00-1hgl0n1bzo6xi.janeway.replit.dev';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpClient: HttpClient) { }

  getAllProducts(
    limit = '12',
    sort = 'desc',
    category?: string
  ): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products`
    );
  }
}
