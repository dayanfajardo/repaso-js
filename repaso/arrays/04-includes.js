
const manejoFrutas = () => {

    let frutas = ['manzana', 'pera <br>', 'uva <br>'];
    let encontrar = frutas.includes('manzana')
    console.log(`Encontrar: ${ encontrar }`);

    
}

let resultado = manejoFrutas();

document.getElementById('resultado').innerHTML = resultado;