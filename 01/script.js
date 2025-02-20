const slaider = document.querySelector('#slider');
const timerDuration = 4000; // 4 seconds

const img = [
  'https://picsum.photos/id/1/1200/675',
  'https://picsum.photos/id/2/1200/675',
  'https://picsum.photos/id/3/1200/675',
  'https://picsum.photos/id/4/1200/675',
  'https://picsum.photos/id/5/1200/675',
  'https://picsum.photos/id/6/1200/675',
  'https://picsum.photos/id/7/1200/675',
  'https://picsum.photos/id/8/1200/675',
  'https://picsum.photos/id/9/1200/675',
];

for (let i = 0; i < img.length; i++) {
  slaider.innerHTML += `
    <div class="slider-item">
      <img src="${img[i]}" alt="" class="slider-image" />
      <div class="slider-caption">Լոգո կամ Նկարագրություն ${i}</div>
      <div class="timer-bar"></div>
    </div>`;

  document.querySelector('#description-container').innerHTML +=
    `<div class="description" data-index="${i}">Նկար ${i}</div>`;
}

const slaiderItems = slaider.querySelectorAll('.slider-item');
const descriptions = document.querySelectorAll('.description');
let currentIndex = 0;

slaiderItems[currentIndex].classList.add('block');
descriptions[currentIndex].classList.add('active');
startTimer();

let interval = setInterval(newImg, timerDuration);

descriptions.forEach(description => {
  description.addEventListener('click', e => {
    const index = parseInt(e.target.getAttribute('data-index'));
    clearInterval(interval);
    resetTimer();
    currentIndex = index;
    updateSlider();
    interval = setInterval(newImg, timerDuration);
    startTimer();
  });
});

function newImg() {
  resetTimer();
  currentIndex = (currentIndex + 1) % slaiderItems.length;
  updateSlider();
  startTimer();
}

function updateSlider() {
  slaiderItems.forEach(item => item.classList.remove('block'));
  slaiderItems[currentIndex].classList.add('block');

  descriptions.forEach(description => description.classList.remove('active'));
  descriptions[currentIndex].classList.add('active');
}

function startTimer() {
  const currentTimerBar = slaiderItems[currentIndex].querySelector('.timer-bar');
  currentTimerBar.style.transition = `width ${timerDuration}ms linear`;
  // Force a reflow
  currentTimerBar.offsetHeight;
  currentTimerBar.style.width = '100%';
}

function resetTimer() {
  const allTimerBars = document.querySelectorAll('.timer-bar');
  allTimerBars.forEach(bar => {
    bar.style.transition = 'none';
    bar.style.width = '0%';
  });
}
