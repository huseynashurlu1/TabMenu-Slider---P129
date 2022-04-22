let img = document.querySelector('#slider img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

var mySlider = [
    'images/image1.jpg',
    'images/image2.png',
    'images/image3.jpg',
]

let currentSlide = 0;
img.src = mySlider[currentSlide];

next.onclick = function() {
    currentSlide++;
    
    if(currentSlide == mySlider.length) {
        currentSlide = 0;
    }

    img.src = mySlider[currentSlide];
}

prev.onclick = function() {
    currentSlide--;

    if(currentSlide == -1) {
        currentSlide = mySlider.length-1
    }

    img.src = mySlider[currentSlide];
}


function AutoPlay() {
    currentSlide++;
    
    if(currentSlide == mySlider.length) {
        currentSlide = 0;
    }

    img.src = mySlider[currentSlide];
}

setInterval(AutoPlay,2000);




// setInterval
// setTimeOut


// function Welcome() {
//     console.log('salam');
// }

// setInterval(() => {
//     Welcome()
// }, 3000);


// setTimeout(() => {
//     Welcome()
// }, 3000);