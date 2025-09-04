const images = [
    'photos/B738NOZ.jpg',
    'photos/AFR318.jpg',
    'photos/LIN320.jpg',
    'photos/NOZ738_2.jpg',
    'photos/PRIVATE.jpg',
    'photos/QATA359.jpg',
    'photos/RYR738_2.jpg',
    'photos/RYR738.jpg',
    'photos/SAU789.jpg',
    'photos/VUE320.jpg'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackground();

setInterval(changeBackground, 10000);