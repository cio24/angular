import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beers: Beer[] = [
  {
    "image":"assets/img/porter.jpg",
    "name":"Bitter Call Saul",
    "type":"IPA",
    "price":180,
    "stock":5,
    "clearance":false,
  },
  {
    "image":"assets/img/porter.jpg",
    "name":"Red Red Wine",
    "type":"Barley Wine",
    "price":200,
    "stock":3,
    "clearance":true,
  },
  {
    "image":"assets/img/porter.jpg",
    "name":"Yellow Submarine",
    "type":"Golden Ale",
    "price":180,
    "stock":0,
    "clearance":false,
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}