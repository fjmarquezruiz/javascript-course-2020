'use strict';

// class Course {
// 	constructor(title, length, price) {
// 		this.title = title;
// 		this.length = length;
// 		this.price = price;
// 	}

// 	render() {
// 		console.log(this);
// 	}

// 	lengthPrice() {
// 		const value = this.length / this.price;
// 		const text = `how much length do you get for the amount paid: ${value.toFixed(
// 			2
// 		)}`;
// 		console.log(text);
// 	}

// 	sumary() {
// 		const text = `
//             - course: ${this.title}
//             - price: ${this.price}
//             - length course: ${this.length}`;
// 		console.log(text);
// 	}
// }

// class PracticalCourse extends Course {
//     constructor(title, length, price,numOfExercises){
//         super(title, length, price);
//         this.numOfExercises = numOfExercises;
//     }
// }
// class TheoreticalCourse extends Course {
//     constructor(){
//         super();
// 	}
// 	publish(text){
// 		console.log(text);
// 	}
// }

// const coursesArray = [
// 	new Course('Quimba', 23, 68.1),
// 	new Course('Fliptune', 2.5, 12.45),
// ];

// for (const iterator of coursesArray) {
// 	iterator.render();
//     iterator.lengthPrice();
//     iterator.sumary();
// }

// const practicalC = new PracticalCourse('cursoPractico', 80, 5, 67);
// console.log(practicalC);
// practicalC.render();
// practicalC.lengthPrice();
// practicalC.sumary();

class Course {

	#price;

	constructor(courseTitle, courseLength, coursePrice) {
		this.title = courseTitle;
		this.length = courseLength;
		this.price = coursePrice;
	}

	get price() {
		return '$' + this.#price;
	}

	set price(value) {
		if (value < 0) {
			throw 'Invalid value!!!';
		}
		this.#price = value;
	}

	calculateValue() {
		return this.length / this.#price;
	}

	printSumary() {
		const text = `
- course: ${this.title}
- price: ${this.price}
- course length: ${this.length}`;
		return text;
	}
}

class PracticalCourse extends Course {
	constructor(title, length, price, numOfExercises) {
		super(title, length, price);
		this.numOfExercises = numOfExercises;
	}
}
class TheoreticalCourse extends Course {
	publish(text) {
		console.log(text);
	}
}

const jsCourse = new Course('Javascript Course', 55, 11.5);
const vueCourse = new Course('Vue Course', 37.5, 19);

console.log(jsCourse);
console.log(vueCourse);

console.log(jsCourse.calculateValue());
console.log(vueCourse.calculateValue());

console.log(jsCourse.printSumary());
console.log(vueCourse.printSumary());

const angularCourse = new PracticalCourse('Angular Course', 76, 12, 65);
const angularCourse2 = new TheoreticalCourse('Angular Course2', 76, 12);

console.log(angularCourse);
console.log(angularCourse.calculateValue());
console.log(angularCourse.printSumary());

console.log(angularCourse2);
console.log(angularCourse2.calculateValue());
console.log(angularCourse2.printSumary());
angularCourse2.publish('Publishing...');
