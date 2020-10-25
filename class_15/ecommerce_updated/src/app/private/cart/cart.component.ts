import { Component, OnInit } from '@angular/core';
import { DataService } from '../../getServices/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select, createSelector } from '@ngrx/store'; 

declare var FB:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartLength:any = 0;
  productList:any = [];
  totalAmount:any = 0;

  constructor(
    public data: DataService,
    public route: ActivatedRoute,
    public router: Router,
    public store: Store) { 

  }

  ngOnInit(): void {

   /*  FB.getLoginStatus((response:any) => {
          if(response.status === 'unknown') {
            this.router.navigate(['/login']);
          }
    }); */


    this.cartList();
    this.getTotal();
  }

 
  cartList() {
    let productList:any = [];
     this.store.select((state:any) => {
            return state.cart;
      }).subscribe((object:any) => {
          productList = object;
      })

    let browserMemory = JSON.parse(localStorage.getItem("cartProductList"));
    
    if(productList.length > 0) {
      this.productList = productList;
      this.cartLength = productList.length;
    }
    else if (browserMemory) {
      this.productList = browserMemory;
      this.cartLength = browserMemory.length;
    }

  }

  removeObject (object:any, index:any) {
    let pList = this.productList;
        pList.splice(index, 1);
        localStorage.setItem("cartProductList", JSON.stringify(pList)); 
        this.cartList();
        this.getTotal();
    
  }
  getQuantity(quantity:any, price:any, index:any) {
      this.productList[index]['quantity'] = quantity;
      this.getTotal();

  }

  getTotal () {
    this.totalAmount = 0;
    for(var i = 0; i < this.productList.length; i++) {
      const p = parseInt(this.productList[i]['price']);
      const q = parseInt(this.productList[i]['quantity']);
      const pq = p * q;
      this.totalAmount = this.totalAmount +  pq;
    }
  }

}
