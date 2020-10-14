'use strict';
// let person = {
//     name: 'Max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     greet: function() {
//         alert('Hi there!');
//     }
// };

// person.age = 31;
// person.isAdmin = true;

// // person.greet();
// console.log(person);

// // delete person.age;
// person.age = undefined;
// console.log(person);

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const movieList = document.getElementById('movie-list');

const renderMovies = (filter = '') => {
	if (movies.length === 0) {
		movieList.classList.remove('visible');
	} else {
		movieList.classList.add('visible');
	}

	movieList.innerHTML = '';

	const filteredMovies = !filter
		? movies
		: movies.filter((movie) => movie.info.title.includes(filter));

	filteredMovies.forEach((movie) => {
		const movieEl = document.createElement('li');

		// if (movie.info === undefined) {
		// // if(!('info' in movie)) {
		//     return;
		// }

		const { info, ...otherProps } = movie;
		console.log(otherProps);
		// const { title: movieTitle } = info;
		let { getFormattedTitle } = movie;
		// getFormattedTitle = getFormattedTitle.bind(movie);

		// movieEl.textContent = movie.info.title + ' - ' + movie.info[1];
		// let text = movieTitle + ' - ';
		// let text = getFormattedTitle() + ' - ';
		// let text = getFormattedTitle.call(movie) + ' - ';
		let text = getFormattedTitle.apply(movie) + ' - ';
		// let text = movie.getFormattedTitle() + ' - ';
		for (const key in info) {
			if (key !== 'title') {
				text += `${key}: ${info[key]}`;
			}
		}
		movieEl.textContent = text;
		movieList.append(movieEl);
	});
};

const addMovieHandler = () => {
	const title = document.getElementById('title').value;
	const extraName = document.getElementById('extra-name').value;
	const extraValue = document.getElementById('extra-value').value;

	if (
		title.trim() === '' ||
		extraName.trim() === '' ||
		extraValue.trim() === ''
	) {
		return;
	}

	const newMovie = {
		info: {
			title,
			[extraName]: extraValue,
		},
		id: Math.random().toString(),
		// getFormattedTitle: function () {
		// 	return this.info.title.toUpperCase();
		// },
		getFormattedTitle() {
			return this.info.title.toUpperCase();
		},
	};

	movies.push(newMovie);
	renderMovies();
	console.log(newMovie);
};

const searchMovieHandler = () => {
	const filterTerm = document.getElementById('filter-title').value;
	renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
