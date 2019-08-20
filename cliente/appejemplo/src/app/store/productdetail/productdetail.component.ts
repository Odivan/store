import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';
import { Product } from 'src/app/model/product';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  private id;
  private carta;

  constructor(private route: ActivatedRoute,private service:ProductRepositoryService,private cart:Cart) { }

  ngOnInit() {
  }

  get productcart():Product[]{
    const ide = this.route.snapshot.paramMap.get("id");
    this.id=ide;
     this.carta=this.service.getProductsdetail(this.id);
      return this.carta;
  }

  agregarP(Product: Product) {
    this.cart.addLine(Product);
    this.cart.recarculate();
  }

}
