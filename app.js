//veremos un ejemplo de cuando createDocumentFragment se nos escapa de la mano
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

