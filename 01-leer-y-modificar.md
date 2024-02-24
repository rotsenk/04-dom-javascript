## Buscar elementos
- Tendremos la página index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leer y Modificar</title>
</head>
<body>
    <h1>Hola al DOM</h1>
    <p id="parrafo">Texto estático</p>
    <h3>Título uno h3</h3>
    <h3 class="h3-danger">Título dos h3</h3>
    <h3 id="h3-secondary">Título tres h3</h3>

    <h4 class="h3-danger">Título dos h3</h4>
</body>
<script src="app.js"></script>
</html>
```

- El script es el siguiente, solamente para explicar lo de la selección de elementos
```javascript
document.querySelector('h3') //.textContent = 'Texto desde el JavaScript';
console.log(document.querySelector('h3'))//si es un tag de html, colocamos el nombre
console.log(document.querySelector('.h3-danger'))//si es una clase, colocamos la clase tipo en css
console.log(document.querySelector('#parrafo'))//querySelector, anteponer el #
//hay un método alternativo para los id, que solamente puede buscar en html a través del id
console.log(document.getElementById('h3-secondary'))//getElementById, sólo el nombre del id

//si queremos capturar varios elementos que se están repitiendo tenemos el querySelectorAll
console.log(document.querySelectorAll('.h3-danger'))
console.log(document.querySelectorAll('h3'))
```

## Modificando elementos
```javascript
//generalmente nosotros vamos a guardar nuestros elementos en una constante pero también podemos guardarlos en una variable
const parrafo = document.querySelector('#parrafo');
//una vez que tenemos capturado el elemento, nosotros podemos acceder a métodos
parrafo.textContent = 'texto desde js';//este método modifica el contenido del texto
parrafo.innerHTML = '<strong>texto con innerHTML</strong>';//con inner podemos colocar etiquetas

//podemos agregar clases a elementos de html aunque no las contengan
parrafo.classList.add('h3-danger', 'my-2');
```