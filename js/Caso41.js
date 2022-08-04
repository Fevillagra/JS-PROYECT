const suma = (a,b) => {
    return a + b;
}

const resta = (a,b) => {
    return a - b;
}

const multiplicar = (a,b)  => {
    return a * b;
}

const dividir = (a,b) => {
    return a / b;
}

const potenciar = (num,exp) => {
    let resultado = num;

    for(let i = 1;i < exp; i++) {
        resultado = resultado * num;
    }

    return resultado;
}

const raizCuadrada = (a) => {
    return Math.sqrt(a)
}

const raizCubica = (a) => {
    return Math.cbrt(a)
}

const operacion = () => {
    let pregunta = prompt(`
    ¿Que Operación desea realizar? \n
    Tecleé la letra correspondiente.
    A: Suma. \n
    B: Resta \n
    C: Multiplicación \n
    D: División \n
    E: Potencía \n 
    F: Raiz cuadrada \n
    G: Raiz cúbica 
    `).toUpperCase();

    let numA, numB;

    switch(pregunta) {
        
        case 'A':
            numA = parseInt(prompt('Ingrese el primer número'));
            numB = parseInt(prompt('Ingrese el segundo número'));
            alert(suma(numA,numB));
            break;
        case 'B':
            numA = parseInt(prompt('Ingrese el primer número'));
            numB = parseInt(prompt('Ingrese el segundo número'));
            alert(resta(numA,numB));
            break;
        case 'C':
            numA = parseInt(prompt('Ingrese el primer número'));
            numB = parseInt(prompt('Ingrese el segundo número'));
            alert(multiplicar(numA,numB));
            break;
        case 'D':
            numA = parseInt(prompt('Ingrese el primer número'));
            numB = parseInt(prompt('Ingrese el segundo número'));
            alert(dividir(numA,numB));
            break;
        case 'E':
            numA = parseInt(prompt('Ingrese número'));
            numB = parseInt(prompt('Ingrese exponente'));
            alert(potenciar(numA,numB));
            break;
        case 'F':
            numA = parseInt(prompt('Ingrese número'));
            alert(raizCuadrada(numA));
            break;
        case 'G':
            numA = parseInt(prompt('Ingrese número'));
            alert(raizCubica(numA));
            break;
        default:
            alert('Error al ingresar operción');
    }
}

operacion();