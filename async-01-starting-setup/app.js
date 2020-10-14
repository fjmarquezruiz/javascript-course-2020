const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
	const promise = new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(sucess) => {
				resolve(sucess);
			},
			(error) => {
				reject(error);
			},
			opts
		);
	});
	return promise;
};

const setTimer = (duration) => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!!!');
		}, duration);
	});
	return promise;
};

// function trackUserHandler() {
// 	// console.log('Clicked!');

// 	// navigator.geolocation.getCurrentPosition(
// 	// 	(posData) => {
// 	// 		// setTimeout(() => {
// 	// 		// 	console.log(posData);
// 	// 		// }, 2000);
// 	// 		setTimer(2000).then((data) => {
// 	// 			console.log(data, posData);
// 	// 		});
// 	// 	},
// 	// 	(error) => {
// 	// 		console.log(error);
// 	// 	}
// 	// );

// 	let positionData;
// 	getPosition()
// 		.then((posData) => {
// 			positionData = posData;
// 			return setTimer(2000);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			return 'on we go...';
// 		})
// 		.then((data) => {
// 			console.log('>> ' + data);
// 			console.log(positionData);
// 		});

// 	setTimeout(() => {
// 		console.log('Timer done!!');
// 	}, 0);

// 	// setTimer(1000).then(() => {
// 	// 	console.log('Timer done!!');
// 	// });
// 	// console.log('Getting position...');
// }

async function trackUserHandler() {
	let posData;
	let timerData;
	try {
		posData = await getPosition();
		timerData = await setTimer(2000);
	} catch (error) {
		console.log(error);
	}

	console.log(posData, timerData);
}

// Promise.race([getPosition(), setTimer(1000)]).then((data) => {
// 	console.log(data);
// });

// Promise.all([getPosition(), setTimer(1000)]).then((promiseData) => {
// 	console.log(promiseData);
// });

Promise.allSettled([getPosition(), setTimer(1000)]).then((promiseData) => {
	console.log(promiseData);
});

button.addEventListener('click', trackUserHandler);

// const forDuration = 10000000;
// let result = 0;
// for (let i = 0; i < forDuration; i++) {
//   result += i;
// }

// console.log(result);
