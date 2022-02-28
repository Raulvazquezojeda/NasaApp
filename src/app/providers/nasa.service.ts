import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceBasic } from '../classes/ServiceBasic.class';

@Injectable({
  providedIn: 'root'
})
export class NasaService extends ServiceBasic {

  constructor(http:HttpClient) {
    super(http,'/api')
   }
   params={};



   public getData = (date:string) => {


   this.params['api_key']='zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb';
   this.params['date']= date;

   return this.getCall('/planetary/apod', this.params);


  }








}
