'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.soverlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal'); //three btns, querySelector only select the first one, we need selectAll to select all, return an array

console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', () => {
    console.log('button has beed clicked');
    modal.classList.remove('hidden'); //access to outside object model to remove the hidden class
  });
}
