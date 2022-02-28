import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DetailsComponent } from '../components/details/details.component';


const ROUTE: Routes = [


  {
    path:"dashboard",
    component: DashboardComponent
  },
  {
    path:"details",
    component: DetailsComponent
  },
  {
    path:"**",
    redirectTo:"/dashboard"
  },



];



  export const ROUTING = RouterModule.forRoot(ROUTE, { relativeLinkResolution: 'legacy' });