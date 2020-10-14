'use strict';

class Person {
	name = 'Max';
	greet() {
		console.log(this.name);
	}
}

const p = new Person();
const q = undefined;

console.log(p);

console.log(typeof p);
console.log(p instanceof Person);
console.log(q instanceof Person);

p.greet();

Object.getOwnPropertyDescriptor(p);