/*Case: 01 */

var x = 1;

function scope () {
	   var x = 2;
}

scope();

console.log(x); // 1

/* End Case: 01 */


console.clear();

/* Case: 02 */

/*
	var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
*/

var h1 = 2;
if(true) {
	var h1 = 3;
	console.log(h1);
}
console.log(h1); // let (3,2) // var(3,3)




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

/* 5, 5, 5, 5, 5*/
