## En esta sección usaremos addEventListener, para detectar eventos

> Este registra un evento a un objeto específico

- el HTML se vería así:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Add Event Listener</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container py-5 bg-dark text-center">
      <h1 class="text-white">Contador</h1>
      <butonn class="btn btn-info"> Aumentar </butonn>
      <butonn class="btn btn-danger"> Disminuir </butonn>
      <h4 class="my-5 text-white">Contador: <span id="span">0</span></h4>
    </div>
  </body>
  <script src="app.js"></script>
</html>
```

- el script, se vería así:

```javascript
const btnAumentar = document.querySelector(".btn-info");

const span = document.getElementById("span");
//crear un contador
let contador = 0;

//capturamos el evento cuando se dé click y cada vez que se haga click pase algo
btnAumentar.addEventListener("click", () => {
  //console.log('me diste click, así que aumentaré');
  //span.textContent = 1;
  contador++;
  span.textContent = contador;
});

//creando el de disminuir
const btnDisminuir = document.querySelector(".btn-danger");

btnDisminuir.addEventListener("click", () => {
  //console.log('me diste click, así que aumentaré');
  //span.textContent = 1;
  contador--;
  span.textContent = contador;
});
```

> Almacenando container

- el script quedaría así:

```javascript
//en esta ocasión vamos a almacenar todo el container, ya que es el que contiene todos nuestros elementos
const container = document.querySelector(".container");

const span = document.getElementById("span");
let contador = 0;

container.addEventListener("click", () => {
  console.log(container); //pintamos en la consola cualquier clic que reciba nuestro sitio
  //podemos delegrar eventos
});
```

> Delegando
- el script quedaría así:

```javascript
const container = document.querySelector(".container");

const span = document.getElementById("span");
let contador = 0;

//en esta podemos hacer un truquito, y es pasarle un evento a la función la "e" de evento
container.addEventListener("click", (e) => {
  //console.log(e.target);//target, selecciona el elemento donde demos click
  //console.log(e.target.classList.contains('btn-info'));
  if (e.target.classList.contains("btn-info")) {
    contador++;
    span.textContent = contador;
  }
  if (e.target.classList.contains("btn-danger")) {
    contador--;
    span.textContent = contador;
  }
});
```
> Usando stopPropagation
- el script quedaría así:
```javascript
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


```