import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:8000/api/customers'; // Laravel API URL

  constructor(private http: HttpClient) {}

  // Fetch all customers
  getCustomers(search: string = ''): Observable<any> {
    let params = new HttpParams();
    if (search) {
      params = params.set('search', search);
    }
    return this.http.get<any>(this.apiUrl, { params });
  }

  // Create a new customer
  createCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customerData);
  }

  // Get a single customer by ID
  getCustomerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update an existing customer
  updateCustomer(id: number, customerData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, customerData);
  }

  // Delete a customer
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
