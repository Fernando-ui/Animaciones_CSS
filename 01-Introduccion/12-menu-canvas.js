document.getElementById('toggle-menu').addEventListener('click',()=>{
    console.log('hola mundo');
    
    const body = document.body;
    body.classList.toggle('translate');
    body.classList.add('overflow-hidden');
    body.addEventListener('transitionend',()=>{
        if(!body.classList.contains('translate')){
            body.classList.remove('overflow-hidden');
        }
    });
});