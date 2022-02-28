import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';


export class ServiceBasic {


    constructor(private http:HttpClient, private urlBase: string){

        this.urlBase = environment.API;
    }

    private makeHttpParams = function (filters: object) {
        let data = {};
        const keys = Object.keys(filters);
        const count = keys.length;
    
        if (count !== 0) {
          let params = new HttpParams();
          for (const key in keys) {
            if (keys.hasOwnProperty(key)) {
              const namePropertie = keys[key];
              params = params.append(namePropertie, filters[namePropertie]);
            }
          }
          data = { params: params };
        }
        return data;
      };

      protected getCall =  (urlMethod: string, params?:any, mapPipe?: any) => {

        const observable:Observable<any> = this.http.get(this.urlBase + urlMethod, this.makeHttpParams(params));
        if (mapPipe === undefined) {
          return observable;
        } else {
          return observable.pipe(map(mapPipe));
        }
      };
    



















}