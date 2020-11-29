import { Component, Input, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
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
    "quantity":0,
  },
  {
    "image":"assets/img/porter.jpg",
    "name":"Red Red Wine",
    "type":"Barley Wine",
    "price":200,
    "stock":3,
    "clearance":true,
    "quantity":0,
  },
  {
    "image":"assets/img/porter.jpg",
    "name":"Yellow Submarine",
    "type":"Golden Ale",
    "price":180,
    "stock":0,
    "clearance":false,
    "quantity":0,
  }
  ];

  constructor(private cart: BeerCartService) { }

  ngOnInit(): void {
  }

  maxReached(message: string){
    alert(message);
  }

  
  addToCart(beer: Beer): void{
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }

}
