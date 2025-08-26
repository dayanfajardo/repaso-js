// Crea una función llamada numeroMayor que reciba un array de números.
// La función debe devolver el número más grande dentro del array.


const numeroMayor = ( num = [] ) => {

    return (Math.max(...num));
  

}

let resultado = numeroMayor([1,2,6,7]);

document.getElementById('resultado').innerHTML = `El numero mayor es: ${ resultado } `;