import { Injectable, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import * as _ from 'lodash';



const host = environment.apiHost;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cartProductList:any = [];
  wishList:any = [];

  constructor(private http:HttpClient) { 

  }

 

  getProductList() {
        const response = this.http.get<any>(`${host}/assets/data.json`);
        return response;
  }

  getCartList() {
    const productList = this.cartProductList;
    return productList;
  }
  addToCart(product:object) {
      let list = JSON.parse(localStorage.getItem('cartProductList'));
      let cpList = [];
      let pid = null
          pid = product["_id"];

      if(list && list.length > 0) {
         cpList = list;
         this.cartProductList = list;
      }
      else {
         cpList = [];
         this.cartProductList = cpList;
      }

      if(cpList.length > 0) {
          let flag = 0;
          for(let i = 0; i < cpList.length; i ++) {
            let result = cpList[i]["_id"].includes(pid);
                if(result) {
                    flag = 1;
                    cpList[i]['quantity'] = cpList[i]['quantity'] + 1;
                    this.cartProductList = cpList;
                }
          }

          if(flag == 0) {
              cpList.push(product);
              localStorage.setItem('cartProductList', JSON.stringify(cpList));
          } 
          else {
              localStorage.setItem('cartProductList', JSON.stringify(cpList));
          }
         
      }
      else {
             cpList.push(product);
             this.cartProductList = cpList;
             localStorage.setItem('cartProductList', JSON.stringify(cpList));
        }
}



  addToWishlist(product:object) {
    let list = JSON.parse(localStorage.getItem('wishList'));
      let cpList = this.wishList;
          cpList.push(product);
      let u = _.uniqWith(cpList, _.isEqual);
          u = this.wishList;

      if(list && list.length > 0) {
         list.push(product);
         let u = _.uniqWith(list, _.isEqual);
         this.wishList = u;
         localStorage.setItem('wishList', JSON.stringify(u));
      }
      else {
          localStorage.setItem('wishList', JSON.stringify(u));
      }

  }

  getWishlist() {
    const wishList = this.wishList;
    return wishList;
  }

}
