// const ids = new Set([1, 2, 3]);
// ids.add(2);
// ids.add(20);

// console.log(ids);

// for (const entry of ids.entries()) {
//     console.log(entry);
// }
// for (const entry of ids.values()) {
//     console.log(entry);
// }

// ids.delete(30);
// if (ids.has(3)) {
//     ids.delete(3);
// }

// console.log(ids);

// const person1 = { name: 'Max' };
// const person2 = { name: 'Sam' };
// const moreDataPerson1 = [{ date: 'yesterday', price: 10 }];
// const moreDataPerson2 = [{ date: 'two weeks ago', price: 100 }];

// const personData = new Map([[person1, moreDataPerson1]]);
// console.log(personData);

// personData.set(person2, moreDataPerson2);
// console.log(personData);

// console.log(personData.get(person1));

// // for (const entry of personData.entries()) {
// //     console.log(entry);
// // }
// for (const [key, value] of personData.entries()) {
//     console.log(key, value);
// }

// for (const key of personData.keys()){
//     console.log(key);
// }
// for (const value of personData.values()){
//     console.log(value);
// }

// console.log(personData.size);

let person = { name: 'Max' };
const people = new WeakSet();

console.log(people);

people.add(person);
console.log(people);