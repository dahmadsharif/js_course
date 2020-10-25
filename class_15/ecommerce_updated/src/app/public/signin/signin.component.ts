import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


declare var FB:any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private _location: Location) { 

  }

  ngOnInit(): void {
  }

  submitLogin() {
        FB.login((response:any) => {
              if(response.authResponse) {
                    FB.api('/me', 'GET', 
                    {"fields":"name,id"},
                    function(response:any) {
                      console.log(response);
                    });

                    this._location.back();
              }
              else {
                this.router.navigate(['/login']);
              }
        });
  }
}
