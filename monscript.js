window.addEventListener("resize", () => selectImg());

let carrouselImages = document.querySelectorAll('.carrousel_img_div');;

function selectImg() {
    carrouselImages.forEach(element => {
        element.classList.add('notActive');
        element.classList.remove('active');
        showNextImage();
    });
    if (window.innerWidth < 600) {
        carrouselImages = document.querySelectorAll('.carrousel_img_div_petit');
        console.log("petit");
    } else {
        carrouselImages = document.querySelectorAll('.carrousel_img_div_grand');
        console.log("grand");
    }
}

let currentImageIndex = 0;

function showNextImage() {
    carrouselImages[currentImageIndex].classList.remove('active');
    carrouselImages[currentImageIndex].classList.add('notActive');
    currentImageIndex = (currentImageIndex + 1) % carrouselImages.length;
    carrouselImages[currentImageIndex].classList.remove('notActive');
    carrouselImages[currentImageIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 600) {



        carrouselImages = document.querySelectorAll('.carrousel_img_div_petit');
    } else {

        carrouselImages = document.querySelectorAll('.carrousel_img_div_grand');

    }
    showNextImage();
    setInterval(showNextImage, 1000);
});



