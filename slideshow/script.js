let slides = document.querySelector('.slides')
let slideIndex = 0;

function advanceSlide(direction) {
    if (direction == 'right') {
        if (slideIndex != 4) {
            slideIndex++
            slides.style.left = `${(slideIndex * -400)}px`;
        } else {
            slideIndex = 0;
            slides.style.left = `0px`
        }
    } else if (direction == 'left') {
        if (slideIndex != 0) {
            slideIndex--
            slides.style.left = `${(slideIndex * -400)}px`;
        } else {
            slideIndex = 4;
            slides.style.left = `-1600px;`;
        }
    }
}

document.querySelector('#leftbutton').addEventListener('click', () => advanceSlide('left'));
document.querySelector('#rightbutton').addEventListener('click', () => advanceSlide('right'))