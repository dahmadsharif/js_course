class Human {
	constructor() {
		this.gender = 'Male';
	}

	getGender() {
		console.log(this.gender);
	}
}


class Person extends Human {
	constructor() {
		super();
		this.name = 'JAC';
		this.gender = 'Female';
	}

	getName() {
		console.log(this.name);
	}
}

let p = new Person();
p.getGender();