const images = [
    'photos/B738NOZ.jpg',
    'photos/IMG_3330.jpg'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackground();

setInterval(changeBackground, 10000);