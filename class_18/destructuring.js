const state = {
	count: 0 
};
const {count} = state;
console.log(count); // 0 

console.log('_____________________');

const car = {
	type:"Fiat", 
	model:"500", 
	color:"white"
};
const {type, color} = car;
console.log(type, color) // Fiat white

console.log('_____________________');


const userdata = {
	id: 1, 
	username: 'Maradona', 
	email: 'Maradona@gmail.com'
};

const { username, id } = userdata;


console.log(userdata.id);


console.log(id, 'id');