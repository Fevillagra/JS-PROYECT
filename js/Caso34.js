class app {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir() {
        if( this.iniciada == false && instalada == true ) {
            this.iniciada = true;
            console.log('La app se inició');
        } else {
            console.log('La app ya está iniciada o todavía no esta instalada');
        }
    }

    cerrar() {
        if ( this.iniciada == true && instalada == true ) {
            this.iniciada = false;
            console.log('La app se cerró')
        } else {
            console.log('La app ya está cerrada o todavía no fue instalada');
        }
    }

    instalar() {
        if ( this.instalada == false ) {
            this.instalada = true;
            console.log('La app se instaló');
        } else {
            console.log('La app ya está instalada');
        }
    }

    desinstalar() {
        if( this.instalada == true) {
            this.instalada = false;
            console.log('La app se desinstaló');
        } else {
            console.log('La app ya está desinstalada');
        }
    }

    mostrarInfo() {
        document.write(`
        <br>
        <p>Descargas: ${this.descargas} </p>
        <p>Puntuación: ${this.puntuacion} </p>
        <p>Peso: ${this.peso} </p>
        `)
    }
}

const a1 = new app(100,1,'23gb');
const a2 = new app(300,3,'5gb');
const a3 = new app(254,5,'3gb');
const a4 = new app(13.12,6.4,'5gb');
const a5 = new app(150,9,'10gb');
const a6 = new app(132,4,'1gb');
const a7 = new app(430,5,'3gb');
console.log(a1);



a1.mostrarInfo();
a2.mostrarInfo();
a3.mostrarInfo();
a4.mostrarInfo();
a5.mostrarInfo();
a6.mostrarInfo();
a7.mostrarInfo();

