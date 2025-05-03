'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');

console.log(openModal);
for (let i = 0; i < openModal.length; i++) {
  console.log(openModal[i].textContent);
}
