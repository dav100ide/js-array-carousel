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

let visible = 0;
function slideDown() {
   if (visible < images.length - 1) {
      visible += 1;
      console.log(visible);
      document.querySelectorAll('.item')[visible - 1].classList.remove('active');
      document.querySelectorAll('.item')[visible].classList.add('active');
   }
}

function slideUp() {
   if (visible > 0) {
      visible -= 1;
      console.log('up', visible);
      document.querySelectorAll('.item')[visible + 1].classList.remove('active');
      document.querySelectorAll('.item')[visible].classList.add('active');
   }
}

next.addEventListener('click', slideDown);
prev.addEventListener('click', slideUp);
console.log(visible);
