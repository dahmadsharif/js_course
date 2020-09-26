/* 
var with same can be declared multiple times. In contrast, let can not be declared multiple times (visual studio) Error.

*/




/* Example 1*/
let n = 1;
if(true) {
	n = 2;
	console.log(n);
}
console.log(n); // let(2,2) //var(2,2)
/* End Example */

console.log('----------------------');

let h1 = 2;
if(true) {
	let h1 = 3;
	console.log(h1);
}
console.log(h1); // let (3,2) // var(3,3)
// console.clear();





for(let i = 0; i < 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, 3000);
	
}

/* Print 1, 2, 3, 4, 5 */

for(var i = 0; i < 5; i++) {
	setTimeout(() => {
		console.log(i);
	}, 3000);
}

/* Print 5,5,5,5,5*/

let statistics = [16, 170, 10];
let [age, height, grade] = statistics;
console.log(height);



/* Example 4 */
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 1


/*
let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope. 
*/


var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined