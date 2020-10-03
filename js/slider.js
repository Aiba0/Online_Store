let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

document.querySelector('.next').addEventListener('click', () => {
    plusSlides(1)

})
document.querySelector('.prev').addEventListener('click', () => {
    plusSlides(-1)
})


function showSlides(n) {

    const slides = document.querySelectorAll(".banner-section__slider-item");
    const dots = document.querySelectorAll(".slider-dot");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}

    slides.forEach(slide => {
        slide.classList.remove('slider-item--active')
    })
    dots.forEach((dot, idx) => {
        dot.classList.remove('slider-dot--active')
    })
    
    slides[slideIndex].classList.add('slider-item--active')
    dots[slideIndex].classList.add('slider-dot--active')
}