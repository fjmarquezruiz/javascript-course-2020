function add(num1, num2) {
	return num1 + num2;
}

console.log(add(2, 4));
console.log(add(23, 41));

function addRandom(num1) {
	return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
	const sum = num1 + num2;
	previousResult = sum;
	return sum;
}

console.log(previousResult, addMoreNumbers(1, 5), previousResult);

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
	h.push('NEW HOBBY');
	console.log(h);
}

printHobbies(hobbies);

function createTaxCalculator(tax) {
	function calculateTax(amount) {
		return amount * tax;
	}

	return calculateTax;
}

// const vatAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(100));

let userName = 'Max';

function greetUser() {
	// let name = 'Anna';
	console.log('Hi ' + name);
}

let name = 'Maximiliam';

userName = 'Manuel';

greetUser();

function powerOf(x, n) {
	// let result = 1;
	// for (let i = 0; i < n; i++) {
	// 	result *= x;
	// }
	// return result;

	// if (n === 1) {
	// 	return x;
	// }
	// return x * powerOf(x, n - 1);

	return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
	name: 'Max',
	friends: [
		{
			name: 'Manuel',
			friends: [
				{
					name: 'Kris',
					friends: [
						{
							name: 'Harry',
						},
					],
				},
			],
		},
		{
			name: 'Julia',
		},
	],
};

function getFriendsNames(person) {
	const collectedNames = [];

	if (!person.friends) {
		return [];
	}

	for (const friend of person.friends) {
		collectedNames.push(friend.name);
		collectedNames.push(...getFriendsNames(friend));
	}

	return collectedNames;
}

console.log(getFriendsNames(myself));
