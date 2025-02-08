import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  imports: [RouterModule, NgFor],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent {
  customers: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }
}
