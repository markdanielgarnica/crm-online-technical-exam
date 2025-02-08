import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.css',
})
export class CustomerCreateComponent {
  customerData = { first_name: '', last_name: '', email: '', contact_number: '' };
  errors: any = {};

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  createCustomer() {
    this.errors = {}; // Reset errors before submitting

    this.customerService.createCustomer(this.customerData).subscribe({
      next: () => {
        alert('Customer created successfully!');
        this.router.navigate(['/']); // Redirect to the customer list
      },
      error: (err) => {
        if (err.status === 422) {
          // Laravel returns validation errors with status code 422
          this.errors = err.error.errors; // Assign the error messages
        } else {
          console.error('Error creating customer:', err);
          alert('Something went wrong. Please try again.');
        }
      },
    });
  }
}
