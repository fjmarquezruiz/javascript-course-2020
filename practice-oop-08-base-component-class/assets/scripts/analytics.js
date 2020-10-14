console.log('Sending analytics...');

const intervalId = setInterval(() => {
	console.log('Sending more analytics data...');
}, 2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
	clearInterval(intervalId);
});
