// const numbers = [1,2,3];
// // const moreNumbers = new Array(5);
// const moreNumbers = new Array(5,3);
// const yetMoreNumbers = Array.of(1,2,3);
// const moreNumbers2 = Array.from('Lorem ipsum');

// const listItems = document.querySelectorAll('li');
// const arrayListItems = Array.from(listItems);

// console.log(numbers);
// console.log(moreNumbers);
// console.log(yetMoreNumbers);
// console.log(moreNumbers2);

// console.log(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[1]);

// const hobbies = ['Cooking', 'Sports'];
// console.log(hobbies);

// hobbies.push('Reading');
// console.log(hobbies);

// hobbies.unshift('Coding');
// console.log(hobbies);

// const poppedValue = hobbies.pop();
// console.log(hobbies);
// console.log(poppedValue);

// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Codding';
// console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-1, 1);
// // hobbies.splice(0);
// console.log(hobbies);
// console.log(removedElements);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// console.log(testResults);

// let storedResults = testResults;
// console.log(testResults, storedResults);
// testResults.push(5.91);
// console.log(testResults, storedResults);

// storedResults = testResults.slice();
// console.log(testResults, storedResults);
// testResults.push(3.24);
// console.log(testResults, storedResults);

// // const rangeResults = testResults.slice(0,3);
// // const rangeResults = testResults.slice(-3,-1);
// const rangeResults = testResults.slice(2);
// console.log(rangeResults);

// storedResults = testResults.concat([3.99, -2]);
// console.log(testResults, storedResults);

// console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5));

// console.log(testResults.includes(10.99));

// const personData = [{name:'Max'},{name:'Manuel'},{name:'Sam'}];
// console.log(personData);

// const manuel = personData.find((person, idx, persons) => {
//     return person.name === 'Manuel';
// });
// manuel.name = 'Anna';
// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Max';
// });
// console.log(maxIndex, personData);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price *(1 + tax));
// // }

// prices.forEach((price, idx, pricesArray) => {
// 	const priceObj = {
// 		index: idx,
// 		taxAdjPrice: price * (1 + tax),
// 	};
// 	taxAdjustedPrices.push(priceObj);
// });

// console.log(prices, taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, pricesArray) => {
// 	const priceObj = {
// 		index: idx,
// 		taxAdjPrice: price * (1 + tax),
// 	};
// 	return priceObj;
// });

// console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
// 	if (a > b) {
// 		return 1;
// 	} else if (a === b) {
// 		return 0;
// 	} else {
// 		return -1;
// 	}
// });
// // const sortedPrices = prices.sort((a, b) => (a > b ? 1 : a === b ? 0 : -1));
// console.log(prices, sortedPrices.reverse());

// // const filteredArray = prices.filter((price, idx, pricesArray) => {
// //     return price > 6;
// // });
// const filteredArray = prices.filter((price) => price > 6);
// console.log(prices, filteredArray);

// // let sum = 0;
// // prices.forEach((price) => {
// //     sum += price;
// // });

// // const sum = prices.reduce((prevValue, curValue, curIndex, pricesArray) => {
// //     return prevValue + curValue;
// // },0);

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(prices, sum);

// const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
// const sum2 = originalArray
// 	.map((obj) => obj.price)
// 	.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97

// console.log(originalArray, sum2);

// const data = 'new york; 10.99; 2000';
// const splitedData = data.split(';');
// console.log(data, splitedData);

// const nameFragments = ['Max', 'Sam', 'Anne'];
// const joinedNameFragments = nameFragments.join(' - ');
// console.log(nameFragments, joinedNameFragments);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const people = [{
//     name: 'Max',
//     age: 30,
// },{
//     name: 'Manuel',
//     age: 31,
// }];
// // const copiedPeople = [...people];
// const copiedPeople = [...people.map(person => ({name: person.name, age: person.age}))];
// people.push({
//     name: 'Anne',
//     age: 29,
// });
// people[0].age = 31;
// console.log(people,copiedPeople);

const nameData = ['Sam', 'Somoza', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
