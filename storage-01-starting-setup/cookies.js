'use strict';

const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

storeBtn.addEventListener('click', () => {
    document.cookie = `uid=${userId}; max-age=20`;
    document.cookie = `user=${JSON.stringify(user)}`;
});
retrBtn.addEventListener('click', () => {
    const cookieData = document.cookie.split(';');
    const data = cookieData.map(i => {
        return i.trim();
    });
    console.log(data[1].split("=")[1]);
});
