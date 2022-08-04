let totalAlumnos = parseInt(prompt('Ingrese el total de alumnos'));
let baseDeAlumnos = [];

for(let i = 0; i < totalAlumnos; i++) {
    baseDeAlumnos[i] = [prompt('Ingrese nombre del alumno numero ' + (i + 1)), 0];
}

const tomarAsistencia = (nombreAlumno,alumno) => {
    let asistencia = prompt(`Ingrese presente con "p" o ausente con cualquier tecla para ${nombreAlumno}`);
    if(asistencia.toLowerCase() == 'p') {
        baseDeAlumnos[alumno][1]++;
    }
}

for(let i = 0; i < 30; i++) {
    for(let alumno in baseDeAlumnos) {
        tomarAsistencia(baseDeAlumnos[alumno][0],alumno);
    }
}

for(let alumno of baseDeAlumnos) {
    let mensaje = ""
    if(30 - alumno[1] >= 18) {
        mensaje = 'SOBREPASO EL LIMITE DE AUSENCIAS';
    }
    document.write(`
        <h2>NOMBRE DEL ALUMNO: ${alumno[0]}</h2>
        <h2>PRESENTES: ${alumno[1]} </h2>
        <h2>AUSENTES: ${30 - alumno[1]} <span style="background-color:#f00; font-size: 2rem;">${mensaje}</span><h2> 
    `);
}