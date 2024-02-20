

const carrouselImages = document.querySelectorAll('.carrousel_img_div');


let currentImageIndex = 0;

function showNextImage() {
    carrouselImages[currentImageIndex].classList.remove('active');
    carrouselImages[currentImageIndex].classList.add('notActive');
    currentImageIndex = (currentImageIndex + 1) % carrouselImages.length;
    carrouselImages[currentImageIndex].classList.remove('notActive');
    carrouselImages[currentImageIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showNextImage();

    setInterval(showNextImage, 3000);
});

