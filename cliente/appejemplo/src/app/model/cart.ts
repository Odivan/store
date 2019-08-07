import { Injectable } from '@angular/core';
import { Product } from './product';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
@Injectable()

export class Cart {
    private lines: CartLine[] = [];
    public itemCount = 0;
    public cartPrice = 0;

    addLine(product: Product, quantity: number = 1){
        const line = this.lines.find(line => line.product.productCode === product.productCode)
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
  }

  getproductsCart(){     
    return this.lines;
  }

  recarculate() {
      this.itemCount = 0;
      this.cartPrice = 0;
      this.lines.forEach(l => {
          this.itemCount += l.quantity; 
          this.cartPrice += (l.quantity * l.product.MSRP);
      }) 
  }

  changequantity(product:Product,contar:number ){
    const line=this.lines.find(line=>line.product.productCode===product.productCode);
    if(line!=undefined){
        line.quantity=contar;
    this.recarculate();
        }
}

  getcuantity(){ 
      return this.lines.map(p=>p.product);
    }

  deleteproduct(product:Product){
      const line=this.lines.findIndex(line=>line.product.productCode===product.productCode);
      if(line!=undefined){
          this.lines.splice(line,1);
          this.recarculate();
          }
  }

}

export class CartLine {
    constructor(public product: Product, public quantity: number) {}
        
        get lineTotal(): number  {
            return this.quantity * this.product.MSRP;
        }
}