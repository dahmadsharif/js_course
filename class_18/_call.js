const data = {
  x: 42,
  getX: function() {
    console.log(this.x);
    return this.x;
  }
}


data.getX();


let getDate = data.getX;
getDate();

let getObjectData = getDate.bind(data);
getObjectData();


/*
   Apply can receive array as argument. 
*/



/* bind 
The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
*/