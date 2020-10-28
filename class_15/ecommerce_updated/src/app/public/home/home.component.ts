import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { DataService } from '../../getServices/data.service';
import { addToCart } from '../../_store/cart.actions';
import { Store } from '@ngrx/store';

declare var FB:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList:any = [];
  reservedList:any = [];
  productNavigation:any = [];
  cartLength: number = 0;
  notification: string = null;
  constructor(
    public data: DataService,
    private store: Store) { 

  }
  ngOnInit(): void {
    this.loadData();
    
  }

  loadData() {  

            this.data.getProductList()
            .subscribe((response:any) => {
              const data = response;
              let mapData =  data.map((object:any) => {
                const category = object["category"].split("/",)[1];
                const subCategory = object["category"].split("/",)[2];
                const id = object["_id"]["$oid"];
                const specificUrl = `${category}/${subCategory}/${id}`;

                const price = (object["price"] !== undefined) ? object["price"] : 0;

                const currency = (object["currency"] !== undefined) ? object["currency"] : 'USD';

                const label = (object["label"] !== undefined) ? object["label"] : 'NA';


       

               

                return {
                        "_id": object["_id"]["$oid"],
                        "description": object["description"][0],
                        "images": object["images"]["large"]["url"],
                        "model": object["model"],
                        "categoryMerged": object["category"],
                        "specificUrl": specificUrl,
                        "searchObject": {
                            "label": label,
                            "price": price,
                            "category": category,
                            "subCategory": subCategory,
                            "currency": currency
                        },
                        "cartObject": {
                          "_id": object["_id"]["$oid"],
                          "images": object["images"]["large"]["url"],
                          "label":  label,
                          "price": price,
                          "category": category,
                          "subCategory": subCategory,
                          "currency": currency,
                          "quantity": 1
                        }
                      }
              })
              const getMapData = mapData;
              const getReserveMapData = mapData;
              this.productList = getMapData;
              this.reservedList = getReserveMapData;


            },(err) => { 
          
          });     
  }

  getIntoCart (object:any) {
     // this.data.addToCart(object);
         this.store.dispatch(addToCart({
            category: object.category,
            currency: object.currency,
            images: object.images,
            label: object.label,
            quantity: object.quantity,
            subCategory: object.subCategory,
            _id: object._id
        }))


  }

  getIntoWishlist (object:any) {
      this.data.addToWishlist(object);
  }

  getFilterd(searchText: any) {
    let rlist = [];
    rlist = this.reservedList;
    this.productList = rlist;
    if (searchText.length < 0) {
      this.productList = rlist;
      this.notification = null;
    }
    if (searchText.length > 0) {
      let filterdArray = [];
      searchText = searchText.toLowerCase();
   
    /*  Search Whole Object */
    filterdArray = rlist.filter(function(obj) {
        return Object.keys(obj["searchObject"]).some(function (key:any) {
            if (obj["searchObject"][key] !== null && obj["searchObject"][key] !== undefined) {
                const tempKey = obj["searchObject"][key].toString().toLowerCase();
                const tempSearch = searchText.toLowerCase();
                return tempKey.includes(tempSearch);
              }

            })
      }); /* End Search Whole Object */
      /* Length of Search Result */
      if (filterdArray.length > 0) {
        this.productList = filterdArray;
        this.notification = null;
      } else {
        this.productList = filterdArray;
        this.notification = `Your search - <strong>${searchText}</strong>- did not match any documents.`;
      }
     /* Length of Search Result */
    }
} /* End Search Result  */

}
