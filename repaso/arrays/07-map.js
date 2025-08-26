
const manejoFrutas = () => {

    let frutas = ['manzana',  'pera', 'uva'];
    let mayus = frutas.map( fruta => fruta.toUpperCase());
        


    console.log(mayus);
 

    
}

let resultado = manejoFrutas();
document.getElementById('resultado').innerHTML = resultado;
