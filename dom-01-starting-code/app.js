// const h1 = document.getElementById('main-title');

// h1.textContent = 'Some new title!';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'red';

// const li = document.querySelector('li:last-of-type');
// li.textContent += ' (Changed!)';

// const body = document.body;

// // const listItemElements = document.querySelectorAll('li');
// const listItemElements = document.getElementsByTagName('li');

// for (const listItemEl of listItemElements) {
//     console.dir(listItemEl);
// }

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
	// if (section.className === 'red-bg visible') {
	// 	section.className = 'red-bg invisible';
	// } else {
	// 	section.className = 'red-bg visible';
    // }
    
    // section.classList.toggle('visible');
    section.classList.toggle('invisible');
});

// let texto1 = section.innerHTML;
// console.log(texto1);
// let texto2 = section.textContent;
// console.log(texto2);
// section.textContent = 'new texto';
// section.innerHTML = '<h2>A new title!!!</h2>';

const list = document.querySelector('ul');
list.innerHTML += '<li>Item 5</li>';
list.insertAdjacentHTML('beforeend','<li>Item 6 beforeend</li>');

const newLi = document.createElement('li');
newLi.textContent = 'Item 7 - createelement';
list.appendChild(newLi);

const newLi2 = document.createElement('li');
newLi2.textContent = 'Item 8 - createelement';
// list.prepend(newLi2);
// list.lastElementChild.before(newLi2);
// list.lastElementChild.after(newLi2);
list.lastElementChild.replaceWith(newLi2);

const secondLi = list.children[1];
const newLi3 = document.createElement('li');
newLi3.textContent = 'Item 9!!!';
secondLi.insertAdjacentElement("afterend", newLi3);

const newLi4 = newLi3.cloneNode(true);
list.append(newLi4);

// list.remove();
// list.parentElement.removeChild(list);