import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  private cartas;

  constructor(public cart: Cart) { }

  ngOnInit() {
  }

  get productcart():any[]{
    this.cartas=this.cart.getproductsCart();
    return this.cartas;
 }

 addcart(product:Product,canti:number){
 
 this.cart.changequantity(product,+canti);
 }
 deleteproductos(product:Product)
 {
   
   this.cart.deleteproduct(product);
 }

}
