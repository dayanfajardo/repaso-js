// Crea una clase Mascota con propiedades como nombre, tipo, edad. Agrega métodos como
// comer(), dormir(), jugar() que cambien el estado de energía o felicidad.


class Mascota {

    constructor( nombre, tipo, edad ) {
        this.nombre = nombre ;
        this.tipo = tipo ;
        this.edad = edad;
        this.energia = 20;
        this.felicidad = 20;
    }

    comer() {
        this.energia += 50;
        this.felicidad += 100;
        console.log(
        `El ${ this.nombre } esta comiendo: Felicidad: ${ this.felicidad }. Energia: ${ this.energia }`);
    }
       dormir() {
        this.energia += 10;
        this.felicidad += 10;
        console.log(
        `El ${ this.nombre } esta durmiendo: Felicidad: ${ this.felicidad }. Energia: ${ this.energia }`);
    }
      jugar() {
        this.energia += 200;
        this.felicidad += 80;
        console.log(
        `El ${ this.nombre } esta jugando: Felicidad: ${ this.felicidad }. Energia: ${ this.energia }`);
    }
}

let miMascota = new Mascota('Zeuz' , 'Pitbull', 5);
miMascota.comer();
miMascota.dormir();
miMascota.jugar();