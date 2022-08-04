/*
90% de asistencia
Promedio por materia 7/10
75% trabajos entregados
-Solicitar datos y generar una salida de si aprueba o no.
-Mostrar todo esto con colores por consola.
-Estructurarlo en una tabla por consola.
*/

let materias = {
    fisica: [75, 3, 7.5, 'FISICA'], //Aprueba
    matematica: [90, 4, 7, 'MATEMÁTICA'], //Aprueba
    biologia: [40, 1,20, 'BIOLOGÍA'], //Desaprueba
    programacion: [100, 4, 10, 'PROGRAMACIÓN'], //Aprueba
    historia: [50, 4, 5, 'HISTORIA'], //Desaprueba
}

const mostrarTabla = () => {
    for(let materia in materias) {
        if( materias[materia][0] >= 75 && materias[materia][1] >= 3 && materias[materia][2] >= 7 ) {
            console.table(materias[materia]);
            console.log(`%cAPROBO: ${materias[materia][3]}`,'color: green; background-color: white; padding: 1rem; border: 1px solid green; font-weight: bolder; font-size: .9rem;');
        } else {
            console.table(materias[materia]);
            console.log(`%cDESAPROBO: ${materias[materia][3]}`,'color: red; background-color: white; padding: 1rem; border: 1px solid red;font-weight: bolder; font-size: .9rem;');
        }
    }
}


mostrarTabla();