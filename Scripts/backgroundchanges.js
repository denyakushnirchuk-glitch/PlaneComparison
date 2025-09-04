const images = [
    'photos/B738NOZ.JPG',
    'photos/AFR318.JPG',
    'photos/LIN320.JPG',
    'photos/NOZ738_2.JPG',
    'photos/PRIVATE.JPG',
    'photos/QATA359.JPG',
    'photos/RYR738_2.JPG',
    'photos/RYR738.JPG',
    'photos/SAU789.JPG',
    'photos/VUE320.JPG'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackground();

setInterval(changeBackground, 10000);