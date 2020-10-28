import { Component, OnInit } from '@angular/core';
import { DataService } from '../../getServices/data.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var FB:any;
@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.scss']
})
export class SpecificComponent implements OnInit {

  productDetails:object = {
    "_id": null,
    "description": null,
    "images":  null,
    "model":  null,
    "specificUrl": null,
    "cartObject": {
          "_id": null,
          "images": null,
          "label": null,
          "price": null,
          "category": null,
          "subCategory": null,
          "currency": null,
          "quantity": 1
    }
  };
  parameter:any

  constructor(
    public data: DataService,
    public route: ActivatedRoute,
    public router: Router) { 
  

  }

  ngOnInit(): void {

    /* FB.getLoginStatus((response:any) => {
      if(response.status === 'unknown') {
            this.router.navigate(['/login']);
          }
    }); */
  

    this.route.params.subscribe((params:any) => {
      let parameter = params['specificId'];
      this.parameter = parameter;
      this.loadData();

  });

}

loadData() {  
  this.data.getProductList()
  .subscribe((response:any) => {
    const data = response;
    let mapData =  response.filter((object:any) => {
        return object["_id"]["$oid"] == this.parameter;
    });

    const productInfo = mapData.map((object:any) => {
      const category = object["category"].split("/",)[1];
      const subCategory = object["category"].split("/",)[2];
      const id = object["_id"]["$oid"];
      const specificUrl = `/${category}/${subCategory}/${id}`;

      const label = (object["label"] !== undefined) ? object["label"] : 'NA';
      const price = (object["price"] !== undefined) ? object["price"] : 0;
      const currency = (object["currency"] !== undefined) ? object["currency"] : 'USD';
      const model = (object["model"] !== undefined) ? object["model"] : 'NA';



      return {
              "_id": object["_id"]["$oid"],
              "description": object["description"][0],
              "images": object["images"]["large"]["url"],
              "model": model,
              "categoryMerged": object["category"],
              "specificUrl": specificUrl,
              "cartObject": {
                    "_id": object["_id"]["$oid"],
                    "images": object["images"]["large"]["url"],
                    "label": label,
                    "price": price,
                    "category": category,
                    "subCategory": subCategory,
                    "currency": currency,
                    "quantity": 1
              }
        }
    });

    this.productDetails = productInfo[0];
    


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
