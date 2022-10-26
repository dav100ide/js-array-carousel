'use strict';
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
const items = document.querySelector('.items');
for (let i = 0; i < images.length; i++) {
   if (i === 0) {
      items.innerHTML += `<div class="item active"><img src="${images[i]}"></div>`;
   } else {
      items.innerHTML += `<div class="item"><img src="${images[i]}"></div>`;
   }
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const itemList = document.querySelectorAll('.item');

let visible = 0;
function slideDown() {
   if (visible < images.length - 1) {
      visible += 1;
      itemList[visible - 1].classList.remove('active');
      itemList[visible].classList.add('active');
      console.log(visible, 'down');
   } else {
      visible = 0;
      itemList[images.length - 1].classList.remove('active');
      itemList[visible].classList.add('active');
      console.log(visible, 'down else');
   }
}

function slideUp() {
   if (visible > 0) {
      visible -= 1;
      itemList[visible + 1].classList.remove('active');
      itemList[visible].classList.add('active');
      console.log(visible, 'up');
   } else {
      visible = images.length - 1;
      itemList[0].classList.remove('active');
      itemList[visible].classList.add('active');
      console.log(visible, 'up else');
   }
}

next.addEventListener('click', slideDown);
prev.addEventListener('click', slideUp);
