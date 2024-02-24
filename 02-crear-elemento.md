## Crear elemento
> En este caso, no tendremos elementos en el html, simplemente un elemento que contenga id y creamos los elementos desde js
- El index.html se vería así:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear Elemento</title>
</head>
<body>
    <h1>Hola al DOM</h1>
    <ul id="lista">
        <!--No vamos a tener elementos acá
        <li>pizza</li>
        <li>papitas</li>
        <li>hamburguesa</li>
        -->
    </ul>
</body>
<script src="app.js"></script>
</html>
```

- el script se vería así:
```javascript
const lista = document.getElementById('lista');
console.log(lista);

const li = document.createElement('li');//creamos la variable que creará el elemento
li.textContent = 'primer elemento';//agregamos el contenido al elemento

lista.appendChild(li);//le decimos que lista agregará un hijo, y le pasamos la constante
```

- ahora, qué pasaría si tuvieramos una lista o un array, y ese array lo quisiéramos pintar en el ul del index?
```javascript
const lista = document.getElementById('lista');
//console.log(lista);

//creamos el array
const arrayElement = ['primer elemento', 'segundo', 'tercero'];
//cómo lo podemos recorrer?
arrayElement.forEach(item => {
    //console.log(item);
    const li = document.createElement('li');//creamos un li en la primer iteración
    li.textContent = item;//su contenido será item, porque tiene los elementos del array

    lista.appendChild(li);
});

```
- usando innerHTML
```javascript
const lista = document.getElementById('lista');

const arrayElement = ['primer elemento', 'segundo', 'tercero'];
//ahora veamos como hacer con diseños más elaborados
//podemos incorporar con innerHTML, usando template string, o sea las comillas invertidas
//estas templates nos sirven para crear elementos dinámicos 
arrayElement.forEach(item => {
    lista.innerHTML += `<li>${item}</li>`;
});

//no siempre es recomendable usarlo así, cuando hacemos cosas más avanzadas, en este caso es simple, porque sólo son 3 elementos, pero cuando son muchos elementos, esto no es optimo
```