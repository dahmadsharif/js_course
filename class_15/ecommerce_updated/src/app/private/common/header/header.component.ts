import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../getServices/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  productNavigation:any;
  cartLength:any = 0;
  wlSize:any = 0;

  constructor(public data: DataService) { 

  }

  ngOnInit(): void {
    this.getNavigation();
  }

  
  ngDoCheck(): void{
    this.cartList();
    this.getWishlist();
  }

  getNavigation() {
            this.data.getProductList()
            .subscribe((response:any) => {
              const data = response;

              /* Map and Remove Duplicate Category/Subcategory */
              const filterType = data.map((object:any) => {
                  return object["category"]
              }).filter((value:any, index:number, self:any) => self.indexOf(value) === index);
              /* End Map and Remove Duplicate Category/Subcategory */

              let navArray = [];
              const root = filterType.map((object:any) => {
                 const category = object.split("/",)[1];
                 return category;
              }).filter((value:any, index:number, self:any) => {
                        if( self.indexOf(value) === index) {
                          navArray.push([]);
                          return self.indexOf(value) === index;
                        }
                        
              });


              for(let i = 0; i < 5; i++) {
                const category = filterType[i].split("/",)[1];
                for(let j = 0; j < root.length; j++) {
                  if(category == root[j]) {
                    navArray[j].push(filterType[i]);
                  }
                }	 
              }

           const n =  navArray.map((object:any, index) => {
                const category = object[index].split("/",)[1];
                let subRoute = [];
                for(let i = 0; i < object.length; i++) {
                  const subcategory = object[i].split("/",)[2];
                      subRoute.push({
                        name: subcategory,
                        url: object[i]
                    })
                }
                return {
                      name: category,
                      route: category,
                      children: subRoute
                      
                 }
                  
            });
            this.productNavigation = n;

            },(err) => { 
          
          });     
    
  }

  cartList() {
      let productList = this.data.getCartList();
      let browserMemory = localStorage.getItem("cartProductList");

    
      if(productList.length > 0) {
        this.cartLength = productList.length;
      }
      else if (browserMemory) {
        browserMemory = JSON.parse(localStorage.getItem("cartProductList"))

        this.cartLength = browserMemory.length;

      }
      else {
        
      }

  }

  getWishlist() {
      let wlist = this.data.getWishlist();
      let browserMemory = JSON.parse(localStorage.getItem("wishList"));
    
      if(wlist.length > 0) {
        this.wlSize = wlist.length;
      }
      else if (browserMemory) {
        this.wlSize = browserMemory.length;
      }
      else {
        
      }

  }

}
