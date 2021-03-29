/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector('#boton-enviar').onclick = function(event){

    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarElementosAnteriores();
    crearElementos(cantidadIntegrantes);
    return false;
}

function borrarElementosAnteriores(){
    const $integrantesFamiliares = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantesFamiliares.length; i++) {
        $integrantesFamiliares[i].remove();
    }
}

function crearElementos(cantidadIntegrantes){
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearElemento(i);       
    }
}

function crearElemento(indice){
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Ingresá la edad del integrante n° ' + (indice+1);

    const $input = document.createElement('input');
    $input.type = 'number';
 
    $div.appendChild($label);
    $div.appendChild($input);

    const $contenedor = document.querySelector('#contenedor');
    $contenedor.appendChild($div);
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


