class Personaje {
    constructor(nombre, vida, fuerza, habilidades = []) {
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.habilidades = habilidades;
    }

    atacar(objetivo) {
    objetivo.vida -= this.fuerza;
    console.log(
    `${this.nombre} ataca a ${objetivo.nombre} causando ${this.fuerza} de daño. Vida de ${objetivo.nombre}: ${objetivo.vida}`);
    }
}


let heroe = new Personaje("Guerrero", 100, 20, ["Espadazo", "Patada"]);
let villano = new Personaje("Orco", 80, 15, ["Mordida", "Golpe"]);

heroe.atacar(villano);
villano.atacar(heroe);