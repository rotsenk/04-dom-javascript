> El DOM es la forma en que JavaScript puede acceder a nuestro documento HTML, podemos acceder a cada elemento de html, incluso a los script, el DOM permite la comunicación entre html y js, en grupos de nodo y objetos.

- el Document: representando cualquier página cargada en el navegador


## Intro al DOM
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
</head>
<body>
    <h1>Hola al DOM</h1>
    <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eum cum itaque debitis maiores expedita illo, optio est incidunt ipsa quia qui, sit labore cupiditate explicabo inventore officiis distinctio porro.</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa veniam distinctio cupiditate voluptate minus fugiat sit pariatur. Nemo harum labore quis consectetur, impedit recusandae perferendis rerum minus cupiditate ab ducimus.</li>
    </ul>
    <button>Click</button>
    <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus, similique provident ad voluptatibus dolorem nobis dicta autem ab fugiat. Labore quidem consequuntur blanditiis? Quod autem nobis asperiores architecto sit?</p>
    </section>
</body>
<script src="app.js"></script>
</html>
```

## Script
```javascript
console.log(document);
//acceder a elementos
document.querySelector('h1').textContent = 'Texto desde el JavaScript';
console.log(document.querySelector('h1'));
```