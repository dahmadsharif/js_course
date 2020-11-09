import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-shoumit',
  templateUrl: './shoumit.component.html',
  styleUrls: ['./shoumit.component.scss']
})
export class ShoumitComponent implements OnInit {

  dataList:any = [];

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get("http://localhost:3400/story").subscribe((object:any) => {
      console.log(object);
      this.dataList = object;
    })
  }

}
