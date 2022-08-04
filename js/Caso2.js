let free = false;

const validarCliente = (time) => {
    let edad = prompt('Ingrese edad');
    if( edad >= 18 ) {
        alert('Podes entrar');
        if( time >= 2 && time < 7 && !free ) {
            alert('Podes entrar gratis');
            free = true;
        } else {
            alert('Tenes que pagar');
        }
    } else {
        alert(`Tu edad es ${edad}, sos menor no podes entrar, te faltan ${18 - edad} para entrar`);
    }
}

validarCliente(1);
validarCliente(2);
validarCliente(7);
validarCliente(2.5);
validarCliente(5);
validarCliente(2);