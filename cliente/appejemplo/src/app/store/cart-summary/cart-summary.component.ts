import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Router, ActivatedRoute } from '@angular/router';

@Component({ 
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.Component.html',
  styleUrls: ['./cart-summary.component.css'] 
})
export class CartSummaryComponent implements OnInit {
 
  constructor(public cart: Cart,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
