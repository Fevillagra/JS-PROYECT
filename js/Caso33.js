class celular {
    constructor( color, peso, resolucionPantalla, resolucionCamara, memoriaRam ) {
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.memoriaRam = memoriaRam;
        this.encendido = false;
    }
    prender() {
        if(this.encendido == false) {
            this.encendido = true;
            alert('El celular está prendido');
        } else {
            alert('El celular ya está prendido');
        }
    }
    apagar() {
        if(this.encendido != false) {
            this.encendido = false;
            alert('El celular está apagado');
        } else {
            alert('El celular ya está apagado');
        }
    }

    reiniciar() {
        if(this.encendido == true) {
            alert('El celular está reiniciandose');
        } else {
            alert('El celular no puede reiniciarse porque está apagado');
        }
    }

    tomarFoto() {
        if(this.encendido == true) {
            alert(`Foto tomada en resolución de ${this.resolucionCamara}`); 
        } else {
            alert('El celular no puede tomar una foto porque está apagado');
        }
    }
    grabar() {
        if(this.encendido == true) {
            alert(`Grabando video en resolución de ${this.resolucionCamara}`); 
        } else {
            alert('El celular no puede grabar video porque está apagado');
        }
    }
    mostrarInfo() {
        return(`
        <p>Color: <b>${this.color}</b></p>
        <p>Peso: <b>${this.peso}</b></p>
        <p>Resolución de pantalla: <b>${this.resolucionPantalla}</b></p>
        <p>Resolución de camara: <b>${this.resolucionCamara}</b></p>
        <p>Memoria Ram<b>${this.memoriaRam}</b></p>
        `)
    }
}

class celularGamaAlta extends celular {
    constructor( color, peso, resolucionPantalla, resolucionCamara, memoriaRam, resolucionCamaraExtra ) {
        super(color, peso, resolucionPantalla, resolucionCamara, memoriaRam);
        this.resolucionCamaraExtra = resolucionCamaraExtra;
    }
    grabarCamaraLenta() {
        alert('Se esta grabando en camara lenta')
    }
    reconocimientoFacial() {
        alert('Se esta iniciando el reconocimiento facial')
    }
    infoAltaGama() {
        return this.mobileInfo() + `<p>La resolución de la camara extra es de ${this.resolucionCamaraExtra}<p>`
    }
}

const celular1 = new celular('rojo', '20gr', '20px', '200px', '2gb');
const celular2 = new celular('blanco', '10gr', '10px', '150px', '3gb');
const celular3 = new celular('negro', '30gr', '30px', '500px', '1gb');

const celularAltaGama1 = new celularGamaAlta('rojo', '20gr', '20px', '200px', '2gb', '1hd');
const celularAltaGama2 = new celularGamaAlta('rojo', '20gr', '20px', '200px', '2gb', '3hd');

// document.write(`
// ${celular1.mostrarInfo()} <br>
// ${celular2.mostrarInfo()} <br>
// ${celular3.mostrarInfo()} <br>
// `)

document.write(`
${celularAltaGama1.mostrarInfo()}<br>
${celularAltaGama2.mostrarInfo()}<br>
`)