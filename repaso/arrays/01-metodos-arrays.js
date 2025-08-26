

const manejoFrutas = () => {

    let frutas = ['manzana', 'pera', 'uva'];

    frutas.push('naranja');
    // frutas.unshift('mani'); // ponemos al inicio del array
    // frutas.unshift('cardamomo');//Agrega una fruta al inicio
    // console.log(frutas.includes('pera'));  //verificamos si existe
    // console.log(frutas.indexOf('uva'));
    frutas.pop();//eliminar
    // frutas.slice(2);
    // frutas.splice('mamoncillo');
    
    return frutas;

}

let resultado = manejoFrutas();


document.getElementById('resultado').innerHTML = resultado;