
// Crea una variable con el clima (sol, lluvia, nublado) y según su valor imprime una
// recomendación: paraguas, gafas de sol o abrigo.

let clima = 'lluvia';
let resultado;

if (clima === 'sol') {
    resultado =  'ponte gafas de sol'
} else if (clima === 'lluvia') {
    resultado =  'saca paraguas'
} else if (clima === 'nublado') {
    resultado =  'ponte abrigo'
} 

console.log( resultado );
