import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/View Models/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  store:Store;
  constructor() {
    this.store={
      Name:"General Store",
      Logo:"https://ae01.alicdn.com/kf/Hbe41ad9bbeae439580c23e3a93a53402W.jpg_q50.jpg",
      Branches:["Alex","Cairo","Assiut","Minya","Aswan"]
    }
   }

  ngOnInit(): void {
  }

}
