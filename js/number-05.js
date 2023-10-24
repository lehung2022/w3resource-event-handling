const images = ['../images/Drawing_the_sword.jpg', '../images/gia_long.jpg', '../images/joe_musashi.jpg'];
let currentIndex = 0;

const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const image = document.getElementById('image');

previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    image.src = images[currentIndex];
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
});