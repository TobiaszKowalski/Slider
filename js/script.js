//let offset = 0; //смещение от левого края
let images = document.querySelectorAll('.slider .slider-line img')
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

//Ф-ция вычисляет ширину в зависимости от размера экрана и присваивает её элементу
let init = () => {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    rollSlider()
}

window.addEventListener('resize', init)
init()

function rollSlider () {
   return sliderLine.style.transform = 'translate(-' + count * width + 'px)'
}
document.querySelector('.slider-next').addEventListener('click', () => {
    count++;
    if (count >= images.length) {
        count = 0
    }
    rollSlider()
})
document.querySelector('.slider-prev').addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = images.length - 1
    }
    rollSlider()
})
/*document.querySelector('.slider-next').addEventListener('click', () => {
    offset += 1500;
    if (offset > 1500 * 4) {offset = 0}
    sliderLine.style.left = -offset + 'px'
})
document.querySelector('.slider-prev').addEventListener('click', () => {
    offset -= 1500;
    if (offset < 0) {offset = 1500 * 4}
    sliderLine.style.left = -offset + 'px'
})*/