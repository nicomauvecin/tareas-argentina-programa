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
    const $integrantesFamiliares = document.querySelectorAll('.integrantes');
    for (let i = 0; i < $integrantesFamiliares.length; i++) {
        $integrantesFamiliares[i].remove();
    }
}

function crearElementos(cantidadIntegrantes){
    if (cantidadIntegrantes > 1){
        mostrarBotonReiniciar();
        mostrarBotonCalcular();

        for (let i = 0; i < cantidadIntegrantes; i++) {
            crearElemento(i);       
        }


    } else{
        reset();
    }
}

function crearElemento(indice){
    const $div = document.createElement('div');
    $div.className = 'integrantes';

    const $label = document.createElement('label');
    $label.textContent = 'Ingresá la edad del integrante n° ' + (indice+1);

    const $input = document.createElement('input');
    $input.type = 'number';
    $input.className = 'integrante'
 
    $div.appendChild($label);
    $div.appendChild($input);

    const $contenedor = document.querySelector('#contenedor');
    $contenedor.appendChild($div);
}

document.querySelector('#boton-calcular').onclick = function(event){

    const $edadIntegrantes = document.querySelectorAll('.integrante');

    let $resultados = document.querySelector('#resultados');
    $resultados.innerText = `El menor tiene ${calcularMenor($edadIntegrantes)}, el mayor ${calcularMayor($edadIntegrantes)} y el promedio de edad es de ${calcularPromedio($edadIntegrantes)}`;
    mostrarResultados();
    return false;
}

document.querySelector('#boton-reiniciar').onclick = function(){
    reset();
    return false;
}

function mostrarBotonCalcular(){
    const $botonCalcular = document.querySelector('#boton-calcular');
    $botonCalcular.className = '';
}

function ocultarBotonCalcular(){
    const $botonCalcular = document.querySelector('#boton-calcular');
    $botonCalcular.className = 'oculto';
}

function mostrarBotonReiniciar(){
    const $botonReiniciar = document.querySelector('#boton-reiniciar');
    $botonReiniciar.className= '';
}

function ocultarBotonReiniciar(){
    const $botonReiniciar = document.querySelector('#boton-reiniciar');
    $botonReiniciar.className= 'oculto';    
}

function mostrarResultados(){
    const $resultados = document.querySelector('#resultados');
    $resultados.className = '';
}

function ocultarResultados(){
    const $resultados = document.querySelector('#resultados');
    $resultados.className = 'oculto';
}

function reset(){
    ocultarBotonCalcular();
    ocultarBotonReiniciar();
    borrarElementosAnteriores();
    ocultarResultados();

    return false;
}
