let nota = document.querySelector('#nota');
let btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener('click',validarEnvio);

function validarEnvio() {
    let resultado, mensaje;
    try {
        resultado = parseInt(nota.value);
        if(isNaN(resultado)) {
            alert('El resultado no es un número');
            throw "ERROR";
        } else {
            alert('El resultado es un número');
        }
    }
    catch(e) {
        mensaje = 'ERROR EL DATO NO ES NÚMERICO';
        console.log(mensaje);
        console.log(e);
    }
}