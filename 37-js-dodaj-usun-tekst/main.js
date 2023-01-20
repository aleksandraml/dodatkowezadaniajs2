let first = document.querySelector('#tekst');
console.log(first);

function show() {
   document.getElementById('tekst').innerText = 'Przykładowy tekst';

}

let second = document.querySelector('#tekst');

function clean() {
   second.innerText = '';

}

let buttonShow = document.querySelector('.first')
let buttonClean = document.querySelector('.second')

buttonShow.addEventListener('click', show)
buttonClean.addEventListener('click', clean)




