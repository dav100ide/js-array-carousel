'use strict';
const images = [
   'img/01.jpg', // src delle immagini
   'img/02.jpg',
   'img/03.jpg',
   'img/04.jpg',
   'img/05.jpg',
   'img/06.jpg', // LUNGHEZZA ARRAY
];

const items = document.querySelector('.items');
for (let i = 0; i < images.length; i++) {
   if (i === 0) {
      items.innerHTML += `<div class="item active">
                              <img src="${images[i]}">
                           </div>`;
   } else {
      items.innerHTML += `<div class="item">
                              <img src="${images[i]}">
                          </div>`;
   }
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const itemList = document.querySelectorAll('.item');

let visible = 0;
next.addEventListener('click', function () {
   itemList[visible].classList.remove('active');
   if (visible < images.length - 1) {
      visible++;
   } else {
      visible = 0;
   }
   itemList[visible].classList.add('active');
});

prev.addEventListener('click', function () {
   itemList[visible].classList.remove('active');
   if (visible > 0) {
      visible--;
   } else {
      visible = images.length - 1;
   }
   itemList[visible].classList.add('active');
});
