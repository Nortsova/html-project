'use strict';

let menuList = document.querySelector('.menu-list');

menuList.addEventListener('click', (e) => {
	if(e.target.tagName.toLowerCase() == 'a') {
		e.preventDefault();
		e.target.parentElement.classList.toggle('open');
	}
});