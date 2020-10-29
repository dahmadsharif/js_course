let items = ["Apple", "Banana", "PineApple", "Jackfruit"];

let r = items.some((elem, index, theLists) => {
	console.log(theLists);
	return elem == "Jackfruit";
});


console.log(r, "r");

console.log('---------------');



let lists = ["Dhaka", "Dhaka", "Dhaka", "Dhaka"];

let rl = lists.every((object) => {
	console.log(object);
	return object == "Dhaka";
})

console.log(rl);