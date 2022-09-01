let alto = window.screen.height;
let ancho = window.screen.width;

let valor = confirm(`Desea comprar esta computadora?\n ALTO: ${alto} \n ANCHO: ${ancho}`);

if(valor) {
    alert('Compra exitosa');
} else {
    alert('Compra cancelada');
}