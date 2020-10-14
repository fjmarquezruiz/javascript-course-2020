const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInputs = addMovieModal.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies = [];

const toogleBackdrop = () => {
	backdrop.classList.toggle('visible');
};

const updateUI = () => {
	let moviesLength = movies.length;

	if (!moviesLength) {
		entryTextSection.style.display = 'block';
	} else {
		entryTextSection.style.display = 'none';
	}
};

const closeMovieDeletionModal = () => {
	toogleBackdrop();
	deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
	const listRoot = document.getElementById('movie-list');
	let movieIndex = 0;

	for (const movie of movies) {
		if (movie.id === movieId) {
			break;
		}
		movieIndex++;
	}

	movies.splice(movieIndex, 1);
	listRoot.children[movieIndex].remove();
	// listRoot.removeChild(listRoot.children[movieIndex]);

    closeMovieDeletionModal();
    updateUI();
};

const startDeleteMovieHandler = (movieId) => {
	deleteMovieModal.classList.add('visible');
	toogleBackdrop();
	const cancelDeletionButton = deleteMovieModal.querySelector(
		'.btn--passive'
	);
	let confirmDeletionButton = deleteMovieModal.querySelector(
		'.btn--danger'
    );
    
    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton = deleteMovieModal.querySelector(
		'.btn--danger'
    );

    cancelDeletionButton.removeEventListener('click', closeMovieDeletionModal);
    // confirmDeletionButton.removeEventListener(
	// 	'click',
	// 	deleteMovieHandler.bind(null, movieId)
	// );

	cancelDeletionButton.addEventListener('click', closeMovieDeletionModal);
	confirmDeletionButton.addEventListener(
		'click',
		deleteMovieHandler.bind(null, movieId)
	);

	// deleteMovieHandler(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
	const listRoot = document.getElementById('movie-list');
	const newMovieEl = document.createElement('li');

	newMovieEl.classList.add('movie-element');
	newMovieEl.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" title="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;

	newMovieEl.addEventListener(
		'click',
		startDeleteMovieHandler.bind(null, id)
	);

	listRoot.appendChild(newMovieEl);
};

const closeMovieModal = () => {
	addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
	addMovieModal.classList.add('visible');
	toogleBackdrop();
};

const clearMovieInputs = () => {
	for (const usrInput of userInputs) {
		usrInput.value = '';
	}
};

const cancelAddMovieHandler = () => {
	closeMovieModal();
	toogleBackdrop();
	clearMovieInputs();
};

const addMovieHandler = () => {
	const titleValue = userInputs[0].value;
	const imageUrlValue = userInputs[1].value;
	const ratingValue = userInputs[2].value;

	if (
		titleValue.trim() === '' ||
		imageUrlValue.trim() === '' ||
		ratingValue.trim() === '' ||
		+ratingValue < 1 ||
		+ratingValue > 5
	) {
		alert('Please enter valid values (rating between 1 and 5).');
		return;
	}

	const newMovie = {
		id: Math.random().toString(),
		title: titleValue,
		image: imageUrlValue,
		rating: ratingValue,
	};

	movies.push(newMovie);
	console.log(movies);
	closeMovieModal();
	toogleBackdrop();
	clearMovieInputs();
	renderNewMovieElement(
		newMovie.id,
		newMovie.title,
		newMovie.image,
		newMovie.rating
	);
	updateUI();
};

const backdropClickHandler = () => {
	closeMovieModal();
	closeMovieDeletionModal();
	clearMovieInputs();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
