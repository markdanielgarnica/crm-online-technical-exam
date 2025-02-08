import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-view',
  imports: [RouterModule],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.css',
})
export class CustomerViewComponent {
  customerId!: number;

  customer: any = {
    first_name: '',
    last_name: '',
    email: '',
    contact_number: '',
  };

  errorMessage: string = '';

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
        this.customer = data;
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

  deleteCustomer() {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(this.customerId).subscribe({
        next: () => {
          alert('Customer deleted successfully!');
          this.router.navigate(['/']); // Redirect back to customer list
        },
        error: (err) => {
          alert('Failed to delete customer. Please try again.');
          console.error('Delete error:', err);
        },
      });
    }
  }
}
