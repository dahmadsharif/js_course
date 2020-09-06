/*
https://javascript.info/strict-mode

This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict"



It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

JavaScript's language syntax distinguishes between expressions and statements. 



*/

/*
The below code snippets are all expressions. They all evaluate to a value.

	0 // 0

	1 + 1 // 2

	The below snippets are all statements. They do not evaluate to a value.

	// `if` statement
	if (answer !== 42) { answer = 42 }
	// `for` is a statement
	for (;;) { console.log('Hello, World'); }
	// Declaring a variable is a statement
	let answer = 42


*/


/*
In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

*/

"use strict";

x = 5;