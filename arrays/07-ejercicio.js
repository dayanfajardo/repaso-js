
// Crea una función llamada sumarNumeros que reciba un array de números.
// La función debe devolver la suma total de todos los números del array.


const sumarNumeros = (num = []) => {

    let valorInicial = 0;
    let sumarValores = num.reduce( 
        (acumulador, valorCurrent) => acumulador + valorCurrent,
            valorInicial
    );

    return sumarValores;
    
}

let resultado = sumarNumeros([1,5,6,8]);

document.getElementById('resultado').innerHTML = resultado;
