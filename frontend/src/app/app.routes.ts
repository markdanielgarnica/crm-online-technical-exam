import { Routes } from '@angular/router';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerCreateComponent } from './pages/customer-create/customer-create.component';
import { CustomerViewComponent } from './pages/customer-view/customer-view.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';

export const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'customer/create', component: CustomerCreateComponent },
  { path: 'customer/:id', component: CustomerViewComponent },
  { path: 'customer/edit/:id', component: CustomerEditComponent },
];
