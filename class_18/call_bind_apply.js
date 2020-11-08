var data = {
   name: 'Root',
   age: 21,
   job: 'Student',
   childObject: {
      name: 'Child',
      childObjectMethod: function() {
         console.log('My name is ' + this.name);
      }
   }
}


data.childObject.childObjectMethod();
data.childObject.childObjectMethod.call(data);

console.log('________________________');

data.childObject.childObjectMethod.apply(data);


/*
   Apply can receive array as argument. 
*/



/* bind */
const dataHolder = data.childObject.childObjectMethod.bind(this);
dataHolder();