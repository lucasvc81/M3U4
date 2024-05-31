const cuadrado = document.getElementsByClassName('cuadrado')[0];
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');        

red.addEventListener('click', function() {
    cuadrado.classList.add('red');
    cuadrado.classList.remove('blue' , 'green')
});

blue.addEventListener('click', function () {
    cuadrado.classList.add('blue');
    cuadrado.classList.remove('red' , 'green')
});

green.addEventListener('click', function () {
    cuadrado.classList.add('green');
    cuadrado.classList.remove ('red' , 'blue')
});