var jsObj = {
   name: 'Javascript Object',
   age: 21,
   job: 'Student',
   anotherObj: {
      name: 'Javascript Nested Object',
      value: function() {
         console.log('My name is ' + this.name);
      }
   }
}

jsObj.anotherObj.value();



var data = {
   name: 'Root',
   age: 21,
   job: 'Student',
   anotherObj: {
      name: 'Child',
      value: function() {
         console.log('My name is ' + this.name);
      }
   }
}


var anotherFunc = data.anotherObj.value.bind(data);

anotherFunc();