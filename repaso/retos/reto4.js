// Haz que un string detecte palabras prohibidas (ej. “feo”, “tonto”) y las reemplace por
// “$#**#”.

const detectarPalabras = (frase) => {

        // Lista de palabras prohibidas
        let ofensas = ['feo', 'tonto'];

        let fraseCensurada = frase;
  
    ofensas.forEach( ofensa => {
         // La 'g' en 'gi' asegura que reemplace todas las coincidencias, no solo la primera.
        let regex = new RegExp( ofensa, "gi" );
        fraseCensurada = fraseCensurada.replace( regex, "$#**#" );

        
    })

    return fraseCensurada;

}

let resultado = detectarPalabras('hoola tonto y feo kljasdklja jkasdkas');
document.getElementById('resultado').innerHTML = resultado;