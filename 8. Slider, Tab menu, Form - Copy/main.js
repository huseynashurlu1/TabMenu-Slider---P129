// let buttons = document.querySelectorAll('.tab-links button');
// let content = document.querySelectorAll('.tab-content div')

// for(let btn of buttons) {
//     btn.addEventListener('click',function(e){
//         let active = document.querySelector('.active');

//         active.classList.remove('active');
//         this.classList.add('active');

//         let index = this.getAttribute('id');
//         console.log(index);

//         for(let div of content) {
            
//             if(div.getAttribute('id') === index) {
//                 div.classList.remove('d-none');
//             }
//             else{
//                 div.classList.add('d-none');
//             }
//         }
//     })
// }


// Audio
// Speech



// function Generate() {
//     var value = document.getElementById('input').value;
//     const Speech = new SpeechSynthesisUtterance(value);
//     Speech.volume = 3;
//     Speech.rate = 0.5;
//     Speech.pitch = 0.2;  
//     window.speechSynthesis.speak(Speech);
// }


// API

function Generate() {
    let value = document.getElementById('input').value;
    let image = document.getElementById('image');
    let api = `https://api.qrserver.com/v1/create-qr-code/?data=${value}`;

    image.src = api;
}



// let x = ['rock','paper','scissors'];
let random = Math.random(x);

function Click(

)


// DISPATCH EVENT

var X = 10;
var x = 20;