const materias = [
    {
        materia: 'Matematica',
        nota: 10
    },
    {
        materia: 'Historia',
        nota: 6
    },
    {
        materia: 'Programacion',
        nota: 8
    }
]

const obtenerDatos = (index) => {
    return new Promise( (resolve,reject) => {
        let materia = materias[index];
        if(materia == undefined) {
            reject('La matería no exíste');
        } else {
            setTimeout(() => {resolve(materia)},Math.random()*1000);
        }
    });
}

const mostrarDatos = async() => {
    let materia = [];
    for(let i = 0; i < materias.length; i++){
        // materia[i] = await obtenerDatos(i);
        // console.log(materia[i]);
        await obtenerDatos(i).then((materia)=> {
            console.log(materia);
        }).catch((e) => {
            console.log(e);
        })
    }
}

mostrarDatos();