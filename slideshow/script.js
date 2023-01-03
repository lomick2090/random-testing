let slides = document.querySelector('.slides')
let slideIndex = 0;
let dots = document.querySelectorAll('.dot');
let timeout;

function advanceSlide(direction) {
    if (direction == 'right') {
        if (slideIndex != 4) {
            slideIndex++;
            slides.style.left = `${(slideIndex * -400)}px`;
            changeChosenDot(slideIndex);
        } else {
            slideIndex = 0;
            slides.style.left = `0px`;
            changeChosenDot(slideIndex);
        }
    } else if (direction == 'left') {
        if (slideIndex != 0) {
            slideIndex--;
            slides.style.left = `${(slideIndex * -400)}px`;
            changeChosenDot(slideIndex);
        } else {
            slideIndex = 4;
            slides.style.left = `-1600px`;
            changeChosenDot(slideIndex);
        }
    }
}

function changeChosenDot (slideNumber) {
    document.querySelector('.chosen').classList.toggle('chosen');
    dots[slideNumber].classList.toggle('chosen')
}

function advanceToSlide(slideNumber) {
    slideIndex = slideNumber;
    slides.style.left = `${(slideIndex * -400)}px`;
}

dots.forEach(dot => { 
    dot.addEventListener('click', () => {
    advanceToSlide(dot.id - 1);
    changeChosenDot(dot.id -1)
})});




document.querySelector('#leftbutton').addEventListener('click', () => advanceSlide('left'));
document.querySelector('#rightbutton').addEventListener('click', () => advanceSlide('right'));
setInterval(() => advanceSlide('right'), 5000)