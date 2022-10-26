'use strict';
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
const items = document.querySelector('.items');
items.innerHTML += `<div class="item active"><img src="img/01.jpg"></div>`;
for (let i = 1; i < images.length; i++) {
   items.innerHTML += `<div class="item"><img src="${images[i]}"></div>`;
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
// cliccando aggiungo classe active agli item
let visible = 0;

next.addEventListener('click', function () {});
