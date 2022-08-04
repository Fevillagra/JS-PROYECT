const materias = {
    fisica: [['Rogriguez', 'Cofla', 'Diogenes', 'Arturito'], 'fisica'],
    matematica: [['Suarez', 'Diogenes', 'Arturito'], 'matematica'],
    programacion: [['Hernandez','Cofla', 'Diogenes'], 'programacion'],
    biologia: [['Gonzalez','Cofla', 'Diogenes', 'Arturito'], 'biologia']
}

const inscribir = (alumno,materia) => {
    for(let asig in materias) {
        if((materias[asig][0] == materias[materia][0]) && materias[materia][0].length < 5) {
            materias[asig][0].push(alumno);
            alert(`Inscripción aceptada. Te inscribiste a ${materias[asig][1]}`)
        } else if((materias[asig][0] == materias[materia][0]) && materias[materia][0].length >= 5) {
            alert('Inscripción denegada. Límite alcanzado');
        }
    }
}

inscribir('fed', 'fisica');
inscribir('mengano', 'fisica');