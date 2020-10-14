// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Math.pow(2, 53) - 1);
// console.log(Math.pow(2, 53));
// console.log(Math.pow(2, 53) + 1);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// console.log(0.2 + 0.4);
// console.log(0.2 + 0.4 === 0.6);
// console.log((1).toString(2));
// console.log((5).toString(2));
// console.log(1/5,(1/5).toString(2));
// console.log(0.2,(0.2).toString(2));
// console.log(0.2,(0.2).toFixed(20));

// console.log(10n);
// console.log(10n - 6n);
// console.log(parseInt(10n) - 6);
// console.log(10n - BigInt(6));

// console.log(Infinity, -Infinity);
// console.log(1/0);
// console.log(Number.isFinite(10));
// console.log(Number.isFinite(Infinity));

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.abs(-5));
// console.log(Math.random());

// -------------------------------------------------

const randomIntBetween = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(randomIntBetween(1, 7));

const cadena = 'Lorem ipsum    ';
console.log(cadena, cadena.length);
console.log(cadena, cadena.toUpperCase());
console.log(cadena, cadena.startsWith('Lo'));
console.log(cadena, cadena.trim());

const productDescription = (strings, productName, productPrice) => {
	console.log(strings);
	console.log(productName);
    console.log(productPrice);
    
    let priceCategory = 'pretty cheap regarding its price';
    if (productPrice > 20) {
        priceCategory = 'fairly priced';
    }

    // return 'This is a product';
    // return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`
    return {
        name: productName,
        price: productPrice
    }
};

const prodName = 'Javascript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);


const userInput = 'test@test.com';

// const regex = new RegExp('^\S+@\S+\.\S+$');
const regex = /^\S+@\S+\.\S+$/;
console.log(userInput, regex, regex.test(userInput));

