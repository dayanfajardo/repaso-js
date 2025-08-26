const contarMayoresDeEdad = (edades = []) => {
    const mayores = edades.filter(edad => edad >= 18).length; // filtra los mayores y cuenta
    const menores = edades.filter(edad => edad < 18).length;  // filtra los menores y cuenta

    return `Mayores de edad: ${mayores} - Menores de edad: ${menores}`;
}

let resultado = contarMayoresDeEdad([1, 15, 20, 25, 10]);
document.getElementById('resultado').innerHTML = resultado;
