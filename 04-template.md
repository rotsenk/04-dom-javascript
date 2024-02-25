# En esta sección trabajaremos con Template

- tendríamos el html así:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Template</title>
  </head>
  <body>
    <h1>Hola al DOM</h1>
    <ul id="lista">
      <!-- <li class="list">
       Necesitamos hacer de forma dinámica lo siguiente: 
       <b>Nombre: </b> <span class="text-danger">descripción...</span> 
      </li> -->
    </ul>
  </body>
  <script src="app.js"></script>
</html>
```

- el script sería así:

```javascript
//veremos un ejemplo de cuando creatTemplate se nos escapa de la mano
const lista = document.querySelector("#lista");

const arrayElement = ["primer elemento", "segundo", "tercero"];

const fragment = document.createDocumentFragment();

arrayElement.forEach((item) => {
  //primero creamos la constante para crear el elemento
  const li = document.createElement("li");
  li.classList.add("list");
  //analizando qué queremos que aparezca dinámicamente en el navegador
  const b = document.createElement("b");
  b.textContent = "Nombre: ";
  //como la etiqueta b está dentro del li, tenemos que empujarlo dentro de
  li.appendChild(b);

  const span = document.createElement("span");
  span.classList.add("text-danger");
  span.textContent = item;
  //incorporar la info dentro del li
  li.appendChild(span);

  //ahora que tenemos la estructura tendríamos que agregar fragment
  fragment.appendChild(li);
});
//cuando terminamos el ciclo, efectivamente tenemos que empujar el fragment
lista.appendChild(fragment);

{
  /* <li class="list">
   <b>Nombre: </b> <span class="text-danger">descripción...</span>
</li> */
}
//analicemos que tengamos que insertar estructuras con más elementos, esto se vuelve demasiado tedioso y no sería optimo
//el innerHTML no acepta esto del fragment...
```
- otra opción con innerHTML, aunque no recomendable pero necesitamos verla
```javascript
//podemos crear una alternativa al createDocumentFragment
//let fragment, es un let solamente, irá almacenando las cadenas de string
let fragment = '';
arrayElement.forEach((item) => {
    fragment += `
    <li class="list">
        <b>Nombre: </b> <span class="text-danger">${item}</span>
    </li>
    `
});
lista.innerHTML = fragment;
//es más sencillo con innerHTML pero NO ES LO RECOMENDABLE
```
> para hacer todo lo que let hace con los strings, apareció algo sumamente efectivos
- al html se le agregaría un template, se vería así:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template</title>
</head>
<body>
    <h1>Hola al DOM</h1>
    <ul id="lista">
        
    </ul>
    <!-- Este template no se visualiza y facilmente los podemos colocar, es recomendable dejarlos abajo de todos los elementos -->
    <template id="template-li">
        <li class="list">
            <b>Nombre: </b> <span class="text-danger">${item}</span>
        </li>
    </template>
</body>
<script src="app.js"></script>
</html>
```

- el script quedaría así:
```javascript
//veremos un ejemplo de cuando creatTemplate se nos escapa de la mano
const lista = document.querySelector('#lista');

const arrayElement = ["primer elemento", "segundo", "tercero"];

//una vez nosotros tenemos el template en nuestro html tenemos que leer
const template = document.querySelector('#template-li').content;//es más sencillo de acceder a cada elemento html
const fragment = document.createDocumentFragment();

arrayElement.forEach((item) => {
    template.querySelector('.list span').textContent = item;//estoy accediendo a lo que va a ir cambiando
    //para que esto sea empujado en el fragment, tenemos que clonar la línea
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
});

lista.appendChild(fragment);
```