let currentScrollPosition = 0;
let scrollAmount = 250;

const carouselCont = document.querySelector(".carousel-container");
const carousel = document.querySelector(".carousel-list");

const btnScrollLeft = document.querySelector(".crsl-btn-left");
const btnScrollRight = document.querySelector(".crsl-btn-right");

btnScrollLeft.style.opacity = "0";

let maxScroll = -carousel.offsetWidth + carouselCont.offsetWidth;
maxScroll -= scrollAmount;
console.log("maxScroll is ", maxScroll);

console.log(carouselCont.offsetWidth);
console.log(carousel.offsetWidth);

function scrollHorizontally(val) {
    currentScrollPosition += val * scrollAmount;

    if (currentScrollPosition > 0) {
        currentScrollPosition = 0;
        btnScrollLeft.style.opacity = "0";
    } else {
        btnScrollLeft.style.opacity = "1";
    }
    if (currentScrollPosition < maxScroll) {
        currentScrollPosition = maxScroll;
        btnScrollRight.style.opacity = "0";
    } else {
        btnScrollRight.style.opacity = "1";
    }

    carousel.style.left = currentScrollPosition + "px";
}
