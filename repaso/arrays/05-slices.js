


const manejoFrutas = () => {

    let frutas = ['manzana <br>', 'pera <br>', 'uva <br>', 'Tarros', 'Jugos'];
    let pocas = frutas.slice(0,2);
    console.log(`partido: ${ pocas }`);

    
}

let resultado = manejoFrutas();

document.getElementById('resultado').innerHTML = resultado;