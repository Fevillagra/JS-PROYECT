let contenedor = document.querySelector('.container');
let data = document.querySelector('.data');

class llave {
    constructor(nombre,modelo,precio) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = precio;
        this.img = `<img class="image" src="https://img.freepik.com/vector-gratis/vector-icono-dibujado-mano-llave-vieja-aislada-sobre-fondo-blanco_134830-1125.jpg?w=2000">`,
        this.ident = Math.random();
    }
}

const llavesTotales = [];


for(let i = 0; i < 20; i++) {
    let unidadLlave = new llave( `<h2>LLave ${i + 1}</h2>`, `<h4>Modelo: ${Math.random() * 30}</h4>`, `<h3>Precio: $${Math.round(Math.random()*30)}<h3>`);
    llavesTotales.push(unidadLlave);

    let item = document.createElement('DIV');
    item.addEventListener('click', () => {
        data.value = unidadLlave.ident;
        console.log(data.value);
    });
    item.innerHTML = `
        <div class="container__item">
            <div class="container__img">${unidadLlave.img}</div>
            ${unidadLlave.nombre}
            ${unidadLlave.modelo}
            ${unidadLlave.precio}
        </div>
        `
    contenedor.appendChild(item);
}

console.log(llavesTotales);