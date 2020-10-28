import { Component, OnInit } from '@angular/core';
import { DataService } from '../../getServices/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var FB:any;



@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wlLength:any = 0;
  wishlist:any = [];

  constructor(
    public data: DataService,
    public route: ActivatedRoute,
    public router: Router) { 

  }
  ngOnInit(): void {

    
        FB.getLoginStatus((response:any) => {
                if(response.status === 'unknown') {
                  this.router.navigate(['/login']);
                }
           
        });


      this.getWishlist();
  }

  getWishlist() {
    let wishlist = this.data.getWishlist();
    let browserMemory = JSON.parse(localStorage.getItem("wishList"));
    
    if(wishlist.length > 0) {
      this.wishlist = wishlist;
      this.wlLength = wishlist.length;
    }
    else if (browserMemory) {
      this.wishlist = browserMemory;
      this.wlLength = browserMemory.length;
    }

  }

  removeObject (object:any, index:any) {
    let wList = this.wishlist;
        wList.splice(index, 1);
        localStorage.setItem("wishList", JSON.stringify(wList)); 

      this.getWishlist();
    
  }

  submitLogin() {
    this.router.navigate(['/login']);
    
  }

}
