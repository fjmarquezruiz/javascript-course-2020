const numbers = [10, 221, 3, 4, 5];
console.log(numbers);

const filteredNumbers = numbers.filter((num) => num > 5);
console.log(filteredNumbers);

const mapNumbres = numbers.map((num) => ({ num: num }));
console.log(mapNumbres);

const reducedNumbers = numbers.reduce((preVal, curVal) => preVal * curVal, 1);
console.log(reducedNumbers);

const findMax = (nArray) => {
	let maxValue = 0;
	nArray.forEach(element => {
        if(element > maxValue) {
            maxValue = element;
        }
    });
	return maxValue;
};

console.log(findMax(numbers));

const findMaxMin = (nArray) => {
    let maxValue = 0;
    let minValue = nArray[0];
	nArray.forEach(element => {
        if(element > maxValue) {
            maxValue = element;
        }
        if(element < minValue) {
            minValue = element;
        }
    });
	return [maxValue, minValue];
};

const [maxValue, minValue] = findMaxMin(numbers);
console.log(maxValue, minValue);

const numbersSet = new Set(numbers);
console.log(numbersSet);

if(numbersSet.add(23)) {
    console.log(numbersSet);
}
if(numbersSet.add(3)) {
    console.log(numbersSet, 'Fail!!');
}