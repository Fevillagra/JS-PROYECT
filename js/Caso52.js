/*
2 semanas
8 horas de trabajo por día
24 hs para estudiar
24 hs para para hacer trabajos p.
56 hs para trabajar
8 hs para hacer las cosas de la casa
-Organizar tareas diariamente
-Utilizar la consola para organizar todo
-El tiempo por tarea no debe superar las 4 hs
PESIMA REDACCION DEL EJERCICIO.


*/

let tiempoEstudiar = 'Tiempo de estudio 102min';
let tiempoTrabajosPracticos = 'Tiempo de hacer tps 102min';
let tiempoTrabajo = 'Tiempo trabajo 240min';
let tiempoLimpiarCasa = 'Tiempo de limpar casa 35min';

let contador = 1;

for(let i = 1; i <= 14; i++) {
    if(i == 1) {
        console.group('Semana 1');
    }
    console.group('Dia ' + i);
    console.log(tiempoEstudiar);
    console.log(tiempoTrabajosPracticos);
    console.log(tiempoTrabajo);
    console.log(tiempoLimpiarCasa);
    console.groupEnd();
    if(i == 7) {
        console.groupEnd();
        console.group('Semana 2');
    } else if( i == 14) {
        console.groupEnd();
    }
}