'use strict';
    /*let main = document.body
    let slider = main.querySelector('.slider');
    let sliderItems = main.querySelector('.slider-items');
    let sliderItem = main.querySelector('.slider-item');
    let button1 = main.querySelector('.button1');
    let button2 = main.querySelector('.button2');
    let button3 = main.querySelector('.button3');*/
    let left = '-300px'
    button1.onclick = function () {
        document.querySelector('.slider-items').style.left = "0px";
    };
    button2.onclick = function () {
        document.querySelector('.slider-items').style.left = "-1000px";
    };
    button3.onclick = function () {
        document.querySelector('.slider-items').style.left = "-2000px";
    };
    button4.onclick = function () {
        document.querySelector('.slider-items').style.left = "-3000px";
    };