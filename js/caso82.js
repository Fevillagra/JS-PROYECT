const alumnos = [
    {
        nombre: 'Rocio',
        email: 'rocio@gmail.com',
        materia: 'Fisica',
    },
    {
        nombre: 'Camila',
        email: 'camila@gmail.com',
        materia: 'Matematica',
    },
    {
        nombre: 'Candela',
        email: 'candela@gmail.com',
        materia: 'Historia',
    },
    {
        nombre: 'Carolina',
        email: 'carolina@gmail.com',
        materia: 'Lengua',
    }
]

let container = document.querySelector('.grid-container');

for( let alumno in alumnos ) {
    let nombre = alumnos[alumno].nombre;
    let email = alumnos[alumno].email;
    let materia = alumnos[alumno].materia;
    container.innerHTML += `
        <div class="grid-item">
            <div class="nombre">${nombre}</div>
            <div class="email">${email}</div>
            <div class="materia">${materia}</div>
            <div class="semana">
                <select class="semana-elegida">
                    <option value="Semana 1">Semana 1</option>
                    <option value="Semana 2">Semana 2</option>
                </select>
            </div>
        </div>
    `;
}

let btn = document.querySelector('.btnsemana');

btn.addEventListener('click', () => {
    let semanas = document.querySelectorAll('.semana');
    let semanaElegida = document.querySelectorAll('.semana-elegida');
    for( let semana in semanas) {
        let elemento = semanas[semana];
        elemento.innerHTML = `
            ${semanaElegida[semana].value}
        `
    }
});
