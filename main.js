function toggleSection() {
    const div = document.getElementById('menu');
    div.style.display = div.style.display === 'none' ? 'flex' : 'none';
}

const prevBtn = document.querySelector('.slider__prev');
const nextBtn = document.querySelector('.slider__next');
const slides = document.querySelector('.slider__slides');

let slideIndex = 0;


function nextSlide() {
slideIndex = (slideIndex + 1) % slides.children.length;
updateSlidePosition();
}


function prevSlide() {
slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
updateSlidePosition();
}


function updateSlidePosition() {
slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, 5000);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);