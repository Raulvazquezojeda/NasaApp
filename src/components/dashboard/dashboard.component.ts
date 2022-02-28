import { formatDate } from '@angular/common';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NasaService } from '../../app/providers/nasa.service';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  data:any = [];
  title:string;
  

  constructor(private _nasaService:NasaService, private router: Router ) { 

  }

  ngOnInit(): void {
    this.getData();
  }



  getData(){
    let date = new Date();
    let cont = 6;
    for (let index = 0; index < cont; index++) {
      
      let today = formatDate(date, 'yyyy-MM-dd', 'en-US');
      date.setDate(date.getDate() - 1)
      today = formatDate(date, 'yyyy-MM-dd', 'en-US');
      this._nasaService.getData(today).subscribe(
        (data:any) => {
          this.data.splice(index,0,data);
          
        }
      )
      
    }


  }
  goToDetails(image:string,explanation:string, title:string){
    localStorage.setItem("image",image);
    localStorage.setItem("explanation",explanation);
    localStorage.setItem("title",title);
    this.router.navigate(['/details']);
  }




}
