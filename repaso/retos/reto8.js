// Crea un programa que imprima la tabla de multiplicar del número que el usuario ingrese.

const imprimaNumero = ( num ) => {


    let tabla;
        
    for (let i = 1; i <= 10; i++) {
        tabla += `${num} x ${i} = ${num * i} <br>`;
        
    } 

    return tabla;
}

let resultado = imprimaNumero(5);
document.getElementById('resultado').innerHTML = resultado;

