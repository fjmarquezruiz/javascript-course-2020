'use strict';

// Libray land
const uid = Symbol('uid');
console.log(uid);

const user = {
	// id: 'p1',
	[uid]: 'p1',
	name: 'Max',
	age: 30,
	[Symbol.toStringTag]: 'User',
};
console.log(user);

// App land => using the library

user[uid] = 'p3';
user.id = 'p2';

console.log(user);
console.log(user[uid]);
console.log(user.toString());

const company = {
	curEmployee: 0,
	employees: ['Max', 'Manu', 'Anna'],
	// next() {
	// 	if (this.curEmployee >= this.employees.length) {
	// 		return { value: this.curEmployee, done: true };
	// 	}
	// 	const returnValue = {
	// 		value: this.employees[this.curEmployee],
	// 		done: false,
	// 	};
	// 	this.curEmployee++;
	// 	return returnValue;
	// },
	getEmployee: function* employeeGenerator() {
		// let employee = company.next();
		// while (!employee.done) {
		// 	yield employee.value;
		// 	employee = company.next();
		// }

		let currentEmployee = 0;
		while (currentEmployee < this.employees.length) {
			yield this.employees[currentEmployee];
			currentEmployee++;
		}
	},
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// let employee = company.next();
// while(!employee.done) {
//     console.log(employee.value);
//     employee = company.next();
// }

// for (const employee of company) {
// 	console.log(employee);
// }

const it = company.getEmployee();

console.log(it.next());
console.log(it.next());
console.log(it.next());

// console.log([...company]);

// ---------------------------------------

const course = {
	title: 'Javascript - The Complete Guide',
};

Reflect.setPrototypeOf(course, {
	toString() {
		return this.title;
	},
});

Reflect.defineProperty(course, 'price', {})

console.log(course.toString());

const courseHandler = {
    get(obj, propertyName){
        console.log(propertyName);
        return obj[propertyName];
    },
    set(obj, propertyName, newValue){
        console.log(obj, propertyName, newValue);
        return obj[propertyName] = newValue;
    }
};

const pCourse = new Proxy(course, courseHandler);

console.log(pCourse, course);
console.log(pCourse.title);
pCourse.title = 'Jamon';
console.log(pCourse.title);