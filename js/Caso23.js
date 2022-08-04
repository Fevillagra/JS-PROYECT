const suma = (a,b) => {
    return alert(a + b);
}

const resta = (a,b) => {
    return alert(a - b);
}

const dividir = (a,b) => {
    return alert(a / b);
}

const multiplicar = (a,b) => {
    return alert(a * b);
}
const variables = () => {
    return {
        
    }
}
function operar() {
    operacion = prompt(`
        Ingrese la letra de la operación deseada: \n
        A: Suma \n
        B: Resta \n
        C: Division \n
        D: Multiplicación
    `);
    let numA = parseInt(prompt('Ingrese el primer número para la operación'));
    let numB = parseInt(prompt('Ingrese el segundo número para la operación'));
    if(operacion.toUpperCase() === 'A') {
        suma(numA,numB);
    } else if(operacion.toUpperCase() === 'B') {
        resta(numA,numB);
    } else if(operacion.toUpperCase() === 'C') {
        dividir(numA,numB);
    } else if(operacion.toUpperCase() === 'D') {
        multiplicar(numA,numB);
    } else {
        alert('Error, ingrese la operación de nuevo');
        operar();
    }
}

operar();