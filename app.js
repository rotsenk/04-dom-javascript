const container = document.querySelector('.container');

const span = document.getElementById('span');
let contador = 0;

//en esta podemos hacer un truquito, y es pasarle un evento a la función la "e" de evento
container.addEventListener('click', (e) => {
    //console.log(e.target);//target, selecciona el elemento donde demos click
    //console.log(e.target.classList.contains('btn-info'));
    if (e.target.classList.contains('btn-info')) {
        contador++;
        span.textContent = contador;
    }
    if (e.target.classList.contains('btn-danger')) {
        contador--;
        span.textContent = contador;
    }
    e.stopPropagation();
});

//nosotros podemos acceder al body
document.body.addEventListener('click', () => {
    console.log('diste click');
    //esto cada vez que damos clic, aparece una propagación, porque sea donde sea, lo detecta
    //por eso debemos decirle que, cuando detectemos un elemento dentro del container, solamente esos eventos se ejecuten y no se haga una propagación
});

