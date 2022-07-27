import { BoardComponent } from './board/board.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServiceComponent } from './service/service.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HomeComponent } from './home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component:BoardComponent, canActivate:[AuthGuard]},
      { path: 'client', component:ClientComponent, canActivate:[AuthGuard]},
      { path: 'invoice', component:InvoiceComponent, canActivate:[AuthGuard]},
      { path: 'service', component:ServiceComponent, canActivate:[AuthGuard]},
      { path: 'vehicle', component:VehicleComponent, canActivate:[AuthGuard]},
      { path: 'user', component:StaffComponent, canActivate:[AuthGuard]},
      {path: '**' ,component:PagenotfoundComponent, canActivate:[AuthGuard]},
      { path: '', redirectTo:'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
