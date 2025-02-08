import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css',
})
export class CustomerEditComponent {
  customerId!: number;

  customerData: any = {
    first_name: '',
    last_name: '',
    email: '',
    contact_number: '',
  };

  errorMessage: string = '';
  successMessage: string = '';

  errors: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    // Get customer ID from the URL
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.customerId) {
      this.getCustomer();
    }
  }

  getCustomer() {
    this.customerService.getCustomerById(this.customerId).subscribe({
      next: (data) => {
        this.customerData = data;
      },
      error: (err) => {
        if (err.status === 404) {
          this.errorMessage = 'Customer not found!';
        } else {
          this.errorMessage = 'An error occurred while fetching the customer.';
        }
        this.router.navigate(['/']);
      },
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customerId, this.customerData).subscribe({
      next: () => {
        this.successMessage = 'Customer updated successfully!';
        setTimeout(() => this.router.navigate(['/']), 2000);
      },
      error: (err) => {
        this.errors = err.error.errors; // Assign the error messages
        this.errorMessage = 'Failed to update customer.';
      },
    });
  }
}
