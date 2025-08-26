
const manejoFrutas = () => {

    let frutas = ['manzana', 'pera', 'uva'];
    let largas = frutas.filter( fruta => fruta.length < 5 );
    console.log(largas);

    
}

let resultado = manejoFrutas();
document.getElementById('resultado').innerHTML = resultado;
