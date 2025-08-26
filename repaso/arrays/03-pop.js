
const manejoFrutas = () => {

    let frutas = ['manzana <br>', 'pera <br>', 'uva <br>'];
    let eliminado = frutas.pop();
    console.log(`Elimine: ${ eliminado }`);

    
}

let resultado = manejoFrutas();

document.getElementById('resultado').innerHTML = resultado;