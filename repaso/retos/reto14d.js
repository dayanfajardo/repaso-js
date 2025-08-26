// Crea una clase Personaje con vida, fuerza y habilidades. Agrega un método
// atacar(otroPersonaje) que le reste vida al oponente.


class Personaje {
    constructor( nombre, vida, fuerza, habilidades ) {
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.habilidades = habilidades;
    }

    atacar(otroPersonaje) {
        otroPersonaje.vida -= this.fuerza;
        console.log(
            `${ this.nombre } ataca a ${ otroPersonaje.nombre } causando ${ this.fuerza } de daño.
            Vida de ${ otroPersonaje.nombre }: ${ this.vida }. 
            `
        );
    }
}

let heroe = new Personaje('Goku', 50, 100 , ['Patada']);
let villano = new Personaje('Vegeta', 20, 80 , ['Disparos']);

heroe.atacar(villano);
villano.atacar(heroe);



