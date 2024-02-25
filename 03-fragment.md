## En esta sección, trabajaremos con fragment + createElement

### Evitando el reflow

- Reflow : Ocurre cuando un navegador debe procesar y dibujar parte o la totalidad de una página web nuevamente, como después de una actualización en un sitio interactivo.
  > Fragment: https://developer.mozilla.org/es/docs/Web/API/DocumentFragment
- Fragment vino a solucionar el reflow
- Se utiliza como una versión ligera de Document que almacena un segmento de una estructura de documento compuesta de nodos como un documento estándar. Por ende en un fragment vamos a guardar todo un template o nodos HTML que luego pintaremos en nuestro DOM, así evitamos en mayor parte el Reflow.

#

- así quedaría el html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fragment</title>
  </head>
  <body>
    <h1>Hola al DOM</h1>
    <ul id="lista"></ul>
  </body>
  <script src="app.js"></script>
</html>
```

- así quedaría el script

```javascript
const lista = document.getElementById("lista");

const arrayElement = ["primer elemento", "segundo", "tercero"];

//cuando queremos usar fragment, nos hacemos una constante
const fragment = document.createDocumentFragment();
//una vez que tenemos el fragment, este nos permitirá guardar esa estructura antes de ser incoportada a nuestro HTML
arrayElement.forEach((item) => {
  //aquí no podemos usar innerHTML
  const li = document.createElement("li");
  li.textContent = item;
  fragment.appendChild(li);

  //console.log(fragment);//podemos ver esto en la consola
});

//una vez que finalizamos el ciclo, tenemos que empujar el fragment con appendChild
lista.appendChild(fragment);

//esto nos dará el mismo resultado, incluso, escribimos más líneas de código, pero es lo recomendable, porque evita o disminuye el reflow
```

- agregando con insertBefore: recibe primero que nada, el nuevo nodo, y luego la referencia de ese nodo

```javascript
const lista = document.getElementById("lista");

const arrayElement = ["primer elemento", "segundo", "tercero"];

const fragment = document.createDocumentFragment();

arrayElement.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;

  //le tenemos que indicar que inserte antes del primer li o del li que se ingresó anteriormente
  //cómo saber el nodo anterior? con node.firstChild
  const childNode = fragment.firstChild;
  //console.log(item, childNode);

  //fragment.appendChild(li);
  fragment.insertBefore(li, childNode);
});

lista.appendChild(fragment);
```
