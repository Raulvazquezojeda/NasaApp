import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent, SafePipe } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SafePipe,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NasaModule { }
