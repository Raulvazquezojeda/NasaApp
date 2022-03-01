import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    DetailsComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
  ]
})
export class NasaModule { }
