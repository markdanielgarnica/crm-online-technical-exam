import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:8000/api/customers'; // Laravel API URL

  constructor(private http: HttpClient) {}

  // Fetch all customers
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Create a new customer
  createCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customerData);
  }

  // Get a single customer by ID
  getCustomerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
