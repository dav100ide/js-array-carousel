'use strict';
const images = [
   'img/01.jpg', // src delle immagini
   'img/02.jpg',
   'img/03.jpg',
   'img/04.jpg',
   'img/05.jpg',
   'img/06.jpg',
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
   if (visible < images.length - 1) {
      visible++;
      itemList[visible - 1].classList.remove('active');
      itemList[visible].classList.add('active');
      console.log(visible, 'next');
   } else {
      visible = 0;
      itemList[images.length - 1].classList.remove('active');
      itemList[visible].classList.add('active');
      console.log(visible, 'next else');
   }
});

prev.addEventListener('click', function () {
   if (visible > 0) {
      visible--;
      itemList[visible + 1].classList.remove('active');
      itemList[visible].classList.add('active');
      console.log(visible, 'prev');
   } else {
      visible = images.length - 1;
      itemList[0].classList.remove('active');
      itemList[visible].classList.add('active');
      console.log(visible, 'prev else');
   }
});
