$form = document.querySelector('#formulario');

document.querySelector('#boton-enviar').onclick = function(){
    borrarElementosAnteriores();
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes")
    const cantidadIntegrantes = Number($cantidadIntegrantes.value)

    const errorIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);

    manejarErrorIntegrantes(errorIntegrantes, cantidadIntegrantes);
    
    return false;
}

function validarCantidadIntegrantes(integrantes){
    if (integrantes === 0){
        return 'El campo integrantes no puede estar vacío.';
    }
    if (integrantes <= 1){
        return 'El campo integrantes debe ser mayor a uno.';
    } if (!/^[0-9]+$/.test(integrantes)){
        return 'El campo integrantes debe tener un valor entero.';
    }
    return '';
}

function manejarErrorIntegrantes(errorIntegrantes, cantidadIntegrantes){
    if (errorIntegrantes){
        $form['cantidad-integrantes'].className = 'error';
        reset();
        return false;
    } else {
        $form['cantidad-integrantes'].className = '';
        return crearElementos(cantidadIntegrantes);
    }
}

document.querySelector('#boton-calcular').onclick = function(){
    const $edadIntegrantes = document.querySelectorAll('.integrante');

    const errorEdades = validarEdades($edadIntegrantes);
    manejarErrorEdades(errorEdades);

    let $resultados = document.querySelector('#resultados');
    $resultados.innerText = `${manejarErrorEdades(errorEdades)}`;
    return false;
}

function validarEdades(edades){
    let a = [];
    for (let i = 0; i < edades.length; i++) {
        if (edades[i].value === ''){
            a.push('El campo edad no puede estar vacío');
        } else if (!/^[0-9]+$/.test(edades[i].value)){
            a.push('El campo edad solo debe tener un valor entero.');
        } else {
            a.push('')
        }
    }
    return a;   
}

function manejarErrorEdades(errorEdades){
    const $edadIntegrantes = document.querySelectorAll('.integrante');
    let errores = 0;
    for (let i = 0; i < errorEdades.length; i++) {
        if (errorEdades[i]){
            document.querySelectorAll('.integrante')[i].className = 'integrante error';
            errores++;
        } else {
            document.querySelectorAll('.integrante')[i].className = 'integrante';
        }  
    }

    if (errores != 0){
        return '';
    } else{
        return `El menor tiene ${calcularMenor($edadIntegrantes)}, el mayor ${calcularMayor($edadIntegrantes)} y el promedio de edad es de ${calcularPromedio($edadIntegrantes)}`;
    }
}

function crearElementos(cantidadIntegrantes){
    mostrarBotonReiniciar();
    mostrarBotonCalcular();
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearElemento(i);       
    }
}

function crearElemento(indice){
    const $div = document.createElement('div');
    $div.className = 'integrantes';

    const $label = document.createElement('label');
    $label.textContent = 'Ingresá la edad del integrante n° ' + (indice+1);

    const $input = document.createElement('input');
    $input.className = 'integrante';
 
    $div.appendChild($label);
    $div.appendChild($input);

    const $contenedor = document.querySelector('#contenedor');
    $contenedor.appendChild($div);
}

function borrarElementosAnteriores(){
    const $integrantesFamiliares = document.querySelectorAll('.integrantes');
    for (let i = 0; i < $integrantesFamiliares.length; i++) {
        $integrantesFamiliares[i].remove();
    }
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
