import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DataService } from '../../getServices/data.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  productList:any = [];
  parameter:any
  constructor(
    public data: DataService,
    public route: ActivatedRoute) { 

  }
  ngOnInit(): void {

    this.route.params.subscribe((params:any) => {
      let parameter = params['categoryName'];
      this.parameter = parameter;


      this.loadData();

  });

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
      }).filter((object:any) => {
              return object["searchObject"]["category"] == this.parameter;
      });


      this.productList = mapData;



    },(err) => { 
  
  });     
}

  getIntoCart (object:any) {
    this.data.addToCart(object);
  }

  getIntoWishlist (object:any) {
    this.data.addToWishlist(object);
  }

}
