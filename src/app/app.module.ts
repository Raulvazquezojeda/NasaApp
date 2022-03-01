import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routes';
import { NasaModule } from '../components/nasa.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ROUTING,
    HttpClientModule,
    NasaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
