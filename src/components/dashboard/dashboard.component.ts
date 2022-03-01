import { formatDate } from '@angular/common';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { NasaService } from '../../app/providers/nasa.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  data: any = [];
  title: string;


  constructor(public _nasaService: NasaService, public router: Router) {

  }

  ngOnInit(): void {
    this.getData();
  }


  // call service with date to get info from API
  getData() {
    let date = new Date();
    let cont = 6;
    for (let index = 0; index < cont; index++) {

      let today = formatDate(date, 'yyyy-MM-dd', 'en-US');
      date.setDate(date.getDate() - 1);
      today = formatDate(date, 'yyyy-MM-dd', 'en-US');
      this._nasaService.getData(today).subscribe(
        (data: any) => {
          this.data.splice(index, 0, data);

        }
      )

    }


  }

  // navigate to details and save click information on localStorage
  goToDetails(image: string, explanation: string, title: string, mediaType: string) {
    localStorage.setItem("image", image);
    localStorage.setItem("explanation", explanation);
    localStorage.setItem("title", title);
    localStorage.setItem("mediaType", mediaType)
    this.router.navigate(['/details']);
  }




}
