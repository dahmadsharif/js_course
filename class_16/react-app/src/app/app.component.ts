import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: number = 100;
  fruits:any = ["Apple", "Banana", "Orange", "Blueberry", "Mango"];

  constructor() {
    console.log('constructor');
  }

  addObject(fruits:string){
    this.fruits.push(fruits);
  }

  remvoeObject(index){
    this.fruits.splice(index, 1)
  }

  
}
