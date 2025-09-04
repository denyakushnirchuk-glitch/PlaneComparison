const images = [
    'https://raw.githubusercontent.com/denyakushnirchuk-glitch/PlaneComparison/main/photos/B738NOZ.JPG',
    'https://raw.githubusercontent.com/denyakushnirchuk-glitch/PlaneComparison/main/photos/AFR318.JPG',
    'https://raw.githubusercontent.com/denyakushnirchuk-glitch/PlaneComparison/main/photos/LIN320.JPG',
    'https://raw.githubusercontent.com/denyakushnirchuk-glitch/PlaneComparison/main/photos/NOZ738_2.JPG',
    'https://raw.githubusercontent.com/denyakushnirchuk-glitch/PlaneComparison/main/photos/PRIVATE.JPG',
    'https://raw.githubusercontent.com/denyakushnirchuk-glitch/PlaneComparison/main/photos/QATA359.JPG',
    'https://raw.githubusercontent.com/denyakushnirchuk-glitch/PlaneComparison/main/photos/RYR738_2.JPG',
    'https://raw.githubusercontent.com/denyakushnirchuk-glitch/PlaneComparison/main/photos/RYR738.JPG',
    'https://raw.githubusercontent.com/denyakushnirchuk-glitch/PlaneComparison/main/photos/SAU789.JPG',
    'https://raw.githubusercontent.com/denyakushnirchuk-glitch/PlaneComparison/main/photos/VUE320.JPG'
];

const preloadedImages = [];
images.forEach(src => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
});

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}


changeBackground();


setInterval(changeBackground, 10000);
