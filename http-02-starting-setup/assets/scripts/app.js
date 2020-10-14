'use strict';

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts');
const postList = document.querySelector('ul');

// function sendHttpRequest(method, url, data) {
// 	return fetch(url, {
// 		method: method,
// 		body: data,
// 	})
// 		.then((response) => {
// 			if (response.status >= 200 && response.status < 300) {
// 				return response.json();
// 			} else {
// 				return response.json().then((errorData) => {
// 					console.log(errorData);
// 					throw new Error('An error had happened!! - Server-side');
// 				});
// 			}
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			throw new Error('An error had happened!!');
// 		});
// }

async function fetchPosts() {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);

		const listOfPost = response.data;

		for (const post of listOfPost) {
			const postEl = document.importNode(postTemplate.content, true);
			postEl.querySelector('h2').textContent = post.title.toUpperCase();
			postEl.querySelector('p').textContent = post.body;
			postEl.querySelector('li').id = post.id;
			listElement.append(postEl);
		}
	} catch (error) {
		alert(error.message);
		console.log(error.response);
	}
}

async function createPost(title, content) {
	const userId = Math.random();
	const post = {
		title: title,
		body: content,
		userId: userId,
	};

	const fd = new FormData(form);
	fd.append('userId', userId);

	const response = await axios.post(
		'https://jsonplaceholder.typicode.com/posts',
		fd
	);
	console.log(response);
}

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const enteredTitle = event.currentTarget.querySelector('#title').value;
	const enteredContent = event.currentTarget.querySelector('#content').value;
	createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		const postId = event.target.closest('li').id;
		console.log('Clicked on button!', postId);
		axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
	}
});
