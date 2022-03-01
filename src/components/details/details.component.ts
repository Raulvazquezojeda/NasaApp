import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  image: string;
  explanation: string;
  title: string;
  mediaType: string;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.getInfo();
  }

  // get info of localStorage
  getInfo() {
    this.image = localStorage.getItem("image");
    this.explanation = localStorage.getItem("explanation");
    this.title = localStorage.getItem("title");
    this.mediaType = localStorage.getItem("mediaType");
  }

  // navigate to dashboard
  goDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
