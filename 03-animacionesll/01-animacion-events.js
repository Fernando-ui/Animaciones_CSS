const button = document.getElementById('button');
const timerEl = document.getElementById('timerEl')
let time = 0;

button.addEventListener('click', ()=>{
    console.log('He sido presionado');
    button.classList.add('animate');
});

button.addEventListener('animationstart',( e )=>{
    const timer = setInterval(() => {
        time += 0.1;
        timerEl.textContent = time;
    }, 100);
});




//? Podemos reiniciar la animacion si al terminar la misma le quitamos la clase que hace la animacion, con esto podemos añadirla cada que demos click.
button.addEventListener('animationend',()=>{
    console.log('La animacion ha Terminado');
    button.classList.remove('animate');
});

button.addEventListener('animationiteration',()=>{
    console.log('La animacion ha vuelto a comenzar');
    
});
