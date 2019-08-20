import { Injectable } from '@angular/core';
import { Orders } from './order';
import { ProductDatasourceService } from './product-datasource.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersRepositoryService {

  private orders: Orders[] = [];

  constructor(private dataSourceService: ProductDatasourceService) {
    dataSourceService.getOrders().subscribe((response) => {
      this.orders = response['orders'];
    });
  };

  getOrders(): Orders[] {
    return this.orders;
  }
}