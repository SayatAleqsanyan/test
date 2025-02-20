const slaider = document.querySelector('#slider')

const img = [
  'img/0.jpg',
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
  'img/7.jpg',
  'img/8.jpg',
]

for (let i = 0; i < img.length; i++) {
  slaider.innerHTML += `<div class="slider-item">
    <img src="${img[i]}" alt="" class="slider-image" />
    <div class="slider-caption">Լոգո կամ Նկարագրություն ${i}</div>
  </div>`;

  // Append the description to the correct container
  document.querySelector('#description-container').innerHTML += `<div class="description" data-index="${i}">Նկար ${i}</div>`;
}

const slaiderItems = slaider.querySelectorAll('.slider-item');
const descriptions = document.querySelectorAll('.description');
const num = 4000;
let currentIndex = 0;

slaiderItems[currentIndex].classList.add('block');

let interval = setInterval(newImg, num);

descriptions.forEach(description => {
  description.addEventListener('click', e => {
    const index = parseInt(e.target.getAttribute('data-index'));
    clearInterval(interval);
    currentIndex = index;
    updateSlider();
    interval = setInterval(newImg, num);
  });
});

function newImg() {
  currentIndex = (currentIndex + 1) % slaiderItems.length;
  updateSlider();
}

function updateSlider() {
  slaiderItems.forEach(item => item.classList.remove('block'));
  slaiderItems[currentIndex].classList.add('block');

  descriptions.forEach(description => description.classList.remove('active'));
  descriptions[currentIndex].classList.add('active');
}
