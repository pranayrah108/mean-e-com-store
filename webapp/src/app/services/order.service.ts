import { inject, Injectable } from '@angular/core';
import { Order } from '../types/order';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  http = inject(HttpClient);
  constructor() {}

  addOder(order: Order) {
    return this.http.post(environment.apiUrl + '/customer/order', order);
  }
  getCustomerOrders() {
    return this.http.get<Order[]>(environment.apiUrl + '/customer/orders');
  }

  getAdminOrder() {
    return this.http.get<Order[]>(environment.apiUrl + '/orders');
  }

  updateOrderStatus(id: string, status: string) {
    return this.http.post(environment.apiUrl + '/orders/' + id, {
      status: status,
    });
  }
}
