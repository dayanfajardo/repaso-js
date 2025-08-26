

const manejoFrutas = () => {

    
    let frutas = ['manzana <br>', 'pera <br>', 'uva <br>'];
    frutas.push('naranja <br>');

    let listadoFrutasHTML = ''; // Inicializa un string para el HTML
    for (let i = 0; i < frutas.length; i++) {
    // Agrega cada fruta al string, formando el HTML completo
    listadoFrutasHTML += `${i + 1}. Fruta: ${frutas[i]}`;
  }
  return listadoFrutasHTML; // Devuelve el string con todas las frutas

    
}

let resultado = manejoFrutas();

document.getElementById('resultado').innerHTML = resultado;