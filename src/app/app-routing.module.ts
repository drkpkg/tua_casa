import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), pathMatch: "full"
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule),
    pathMatch: "full"
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule),
    pathMatch: "full"
  },
  {
    path: 'clients/:id',
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule),
    pathMatch: "full"
  },
  {
    path: 'employees',
    loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule),
    pathMatch: "full"
  },
  {
    path: 'employees/:id',
    loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule),
    pathMatch: "full"
  },
  {
    path: 'staff',
    loadChildren: () => import('./pages/staff/staff.module').then(m => m.StaffModule),
    pathMatch: "full"
  },
  {
    path: 'staff/:id',
    loadChildren: () => import('./pages/staff/staff.module').then(m => m.StaffModule),
    pathMatch: "full"
  },
  {
    path: 'receptionist',
    loadChildren: () => import('./pages/receptionist/receptionist.module').then(m => m.ReceptionistModule),
    pathMatch: "full"
  },
  {
    path: 'receptionist/:id',
    loadChildren: () => import('./pages/receptionist/receptionist.module').then(m => m.ReceptionistModule),
    pathMatch: "full"
  },
  {
    path: 'sales',
    loadChildren: () => import('./pages/sale/sale.module').then(m => m.SaleModule),
    pathMatch: "full"
  },
  {
    path: 'sales/:id',
    loadChildren: () => import('./pages/sale/sale.module').then(m => m.SaleModule),
    pathMatch: "full"
  },
  {
    path: 'cities',
    loadChildren: () => import('./pages/city/city.module').then(m => m.CityModule),
    pathMatch: "full"
  },
  {
    path: 'cities/:id',
    loadChildren: () => import('./pages/city/city.module').then(m => m.CityModule),
    pathMatch: "full"
  },
  {
    path: 'countries',
    loadChildren: () => import('./pages/country/country.module').then(m => m.CountryModule),
    pathMatch: "full"
  },
  {
    path: 'countries/:id',
    loadChildren: () => import('./pages/country/country.module').then(m => m.CountryModule),
    pathMatch: "full"
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
    pathMatch: "full",
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/term/term.module').then(m => m.TermModule),
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
