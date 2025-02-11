const slaider = document.querySelector('#slider');
const slaiderItems = slaider.querySelectorAll('.slider-item');
const descriptions = document.querySelectorAll('.description');
const num = 4000;
let currentIndex = 0;

slaiderItems[currentIndex].classList.add('block'); // Սկզբում ցույց ենք տալիս առաջին նկարը

let interval = setInterval(newImg, num);

descriptions.forEach(description => {
  description.addEventListener('click', (e) => {
    const index = parseInt(e.target.getAttribute('data-index'));
    clearInterval(interval); // Հեռացնում ենք նախորդ interval-ը
    currentIndex = index;
    updateSlider();
    interval = setInterval(newImg, num); // Ստեղծում ենք նոր interval՝ նոր նկար ստանալու համար
  });
});

function newImg() {
  currentIndex = (currentIndex + 1) % slaiderItems.length;
  updateSlider();
}

function updateSlider() {
  slaiderItems.forEach(item => item.classList.remove('block')); // Հեռացնում ենք 'block' բոլոր նկարներից
  slaiderItems[currentIndex].classList.add('block'); // Ավելացնում ենք 'block' կոնկրետ նկարին

  // Հեղինակավոր ենք նկարագրության փոխումը
  descriptions.forEach(description => description.classList.remove('active'));
  descriptions[currentIndex].classList.add('active');
}
