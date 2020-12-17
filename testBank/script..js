var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 
slider.oninput = function() {
    output.innerHTML = this.value;
}
var slider1 = document.getElementById("myRange2");
var output1 = document.getElementById("demo2");
output1.innerHTML = slider1.value; 
slider1.oninput = function() {
    output1.innerHTML = this.value;
}

let position =  0;
const slidesToShow = 4;
const slidesToScroll =1; 
const container = document.querySelector('.sliders');
const track = document.querySelector('.slider-items');
const items = document.querySelectorAll('.slider-item');
const prev = document.querySelector('#button1');
const next = document.querySelector('#button2')
const itemWidth = container.clientWidth / slidesToShow
const itemCount = items.length;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) =>{
    item.style.minWidth = `${itemWidth}px`; 
})

next.addEventListener('click', () => {
    const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    track.style.transform = `translateX(${position}px)`;
});
prev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    track.style.transform = `translateX(${position}px)`;
});
