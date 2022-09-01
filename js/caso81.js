let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');
let materia = document.querySelector('#materia');
let enviarBtn = document.querySelector('#enviarbtn');

enviarBtn.addEventListener('click', enviar);

let data = []

function enviar(e) {
    e.preventDefault();
    alert('something in the way...')
    data.push(nombre = document.querySelector('#nombre').value);
    data.push(nombre = document.querySelector('#nombre').value);
    data.push(email = document.querySelector('#email').value);
    data.push(materia = document.querySelector('#materia').value);
    data.push(enviarBtn = document.querySelector('#enviarbtn').value);
    console.log(data)
}

