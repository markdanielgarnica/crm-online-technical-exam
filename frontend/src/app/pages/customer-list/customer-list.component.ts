import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { NgFor } from '@angular/common';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  imports: [RouterModule, NgFor, FormsModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent {
  customers: any[] = [];

  searchQuery: string = '';

  private searchSubject = new Subject<string>();

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();

    this.searchSubject.pipe(debounceTime(500), distinctUntilChanged()).subscribe((query) => {
      this.loadCustomers(query);
    });
  }

  loadCustomers(search: string = '') {
    this.customerService.getCustomers(search).subscribe((data) => {
      this.customers = data;
    });
  }

  onSearchChange() {
    this.searchSubject.next(this.searchQuery); // Emit search query
  }
}
