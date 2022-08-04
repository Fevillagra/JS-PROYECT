document.write('<br><br>')

const materias = {
    fisica: [['Rogriguez', 'Cofla', 'Diogenes', 'Arturito'], 'fisica'],
    matematica: [['Suarez', 'Diogenes', 'Arturito'], 'matematica'],
    programacion: [['Hernandez','Cofla', 'Diogenes'], 'programacion'],
    biologia: [['Gonzalez','Cofla', 'Diogenes', 'Arturito'], 'biologia']
}

const obtenerInformacion = (materia) => {

    if(materia !== undefined) {
        return materias[materia];
    } else {
        console.log('Error');
    }
}

const mostrarInformacion = (materia) => {

    let profesor = obtenerInformacion(materia)[0][0];
    let asignatura = obtenerInformacion(materia)[1];
    obtenerInformacion(materia)[0].shift();
    let alumnos = obtenerInformacion(materia)[0];
    document.write(`
    <p style="font-size: 2rem; font-weight: bolder">Asignatura: ${asignatura}.</p>
    <br>
    <p style="color: red; font-weight: bolder;">PROFESOR: ${profesor}.</p>
    <br>
    <p style="color: blue; font-weight: bold;">ALUMNOS: ${alumnos}.</p>
    <br><br><br>
    `);
    
}

mostrarInformacion('fisica');
mostrarInformacion('matematica');
mostrarInformacion('programacion');
mostrarInformacion('biologia');

const mostrarMaterias = (alumno) => {
    let cantidadClases = 0;
    for(let materia in materias) {
        if(materias[materia][0].includes(alumno)) {
            cantidadClases++;
            document.write(`
                <p>${alumno} asiste a ${materias[materia][1]}</p>
            `);
        }
    }
    document.write(`<p>${alumno} asiste a ${cantidadClases} clases.</p><br><br><br>`);
}

mostrarMaterias('Cofla');
mostrarMaterias('Diogenes');