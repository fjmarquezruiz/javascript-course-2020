const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const myNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];

function alertGreater() {
	if (randomNumber > 0.7) {
		alert(`Great! The number is ${randomNumber}`);
	} else {
		alert(`Ohhh! :( The number is lower => ${randomNumber}`);
	}
}

function firstLoop() {
    console.log('>>> FIRST LOOP');
    for (let i = (myNumbers.length - 1); i >= 0 ; i--) {
        console.log(myNumbers[i]);
    }
}

function secondLoop() {
    console.log('>>> SECOND LOOP');
    for (const itemLoop of myNumbers) {
        console.log(itemLoop);
    }
}

function alertLogical() {
    if(randomNumber > 0.7 && randomNumber2 > 0.7) {
        alert(`Great! Both are greater than 0.7 => ${randomNumber} - ${randomNumber2}`);
    }
    if(randomNumber < 0.2 || randomNumber2 < 0.2) {
        alert(`Be care! One of them is NOT greater than 0.2 => ${randomNumber} - ${randomNumber2}`);
    }
}

alertGreater();
firstLoop();
secondLoop();
alertLogical();
