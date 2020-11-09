/*
Bind::
Use .bind() when you want that function to later be called with a certain context, useful in events. 


Use .call() or .apply() when you want to invoke the function immediately, and modify the context.
https://stackoverflow.com/a/15455043/1324366
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
*/


const data = {
  x: 42,
  getX: function() {
    console.log(this.x);
    return this.x;
  }
}

data.getX();  // 42
let getDate = data.getX;
getDate();  // undefined

/*
   Bind
*/
let getObjectData = getDate.bind(data);
getObjectData();


/* 
   Call 
*/
console.log('________________________');

data.getX.call(data);
data.getX.apply(data);

console.log('________________________');

