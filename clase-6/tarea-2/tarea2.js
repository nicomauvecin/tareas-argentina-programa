/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregar = document.querySelector('#agregar-integrante');
const $botonEliminar = document.querySelector('#eliminar-integrante');
let sumador = 0;

$botonAgregar.onclick = function(){
    sumador += 1;
    agregarIntegrante(sumador);
}

$botonEliminar.onclick = function(){
    eliminarIntegrante(sumador);
    sumador -= 1;
}

function agregarIntegrante(i){
    const $div = document.createElement('div');
    $div.className = `integrante-${i}`;

    const $label = document.createElement('label');
    $label.textContent = 'Ingresá el salario mensual del integrante número ' + i;

    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $contenedor = document.querySelector('.contenedor');

    $contenedor.appendChild($div);
}

function eliminarIntegrante(i){
    const $div = document.querySelector(`.integrante-${i}`)
    $div.remove();
}

