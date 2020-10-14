'use strict';

class AgedPerson {
	printAge() {
		console.log(this.age);
	}
}

class Person extends AgedPerson {
	name = 'Max';
	constructor() {
		super();
		this.age = 30;
	}
	greet() {
		console.log(
			'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
		);
	}
}

// function Person() {
// 	this.name = 'Max';
// 	this.age = 30;
// 	this.greet = function () {
// 		console.log(
// 			'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
// 		);
// 	};
// }

// // Person.prototype = {
// // 	printAge() {
// // 		console.log(this.age);
// // 	},
// // };

// Person.prototype.printAge = function () {
// 	console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();
// console.log(person);
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// // console.log(person.__proto__.__proto__);

// const p = new Person();
// const p2 = new Person();
// console.log(p.__proto__ === p2.__proto__);

const course = {
	title: 'Javascript',
	rating: 5,
};

console.log(Object.getPrototypeOf(course));
// console.log(course.__proto__);

Object.setPrototypeOf(course, {
	// ...Object.getPrototypeOf(course),
	printRating: function () {
		console.log(`${this.rating}/5`);
	},
});

console.log(course.__proto__);
course.printRating();
