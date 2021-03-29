const $form = document.querySelector('#carta-a-santa');

function validarNombre(nombre){
    if (nombre.length === 0){
        return 'El campo nombre debe tener al menos 1 caracter';
    } if (nombre.length >= 50 ){
        return 'El campo nombre debe tener menos de 50 caracteres';
    }

    if(!/^[a-z]+$/i.test(nombre)){
        return 'El campo nombre solo acepta letras';
    }

    return '';
}

function validarCiudad(ciudad){
    if (ciudad.length === 0){
        return 'Debes seleccionar una ciudad.';
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length === 0){
        return 'El campo descripción debe tener al menos 1 caracter';
    } else if (descripcionRegalo.length >= 100){
        return 'El campo descripción debe tener menos de 100 caracteres';
    } else if(!/^[a-z 0-9]+$/i.test(descripcionRegalo)){
        return 'El campo descripción solo puede tener números y letras.'
    } else {
        return '';
    }


}

function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };

    const esExito = manejarErrores(errores) === 0;
    if (esExito){
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
        setTimeout("redireccionar()",5000);
    }
    event.preventDefault();
}

function manejarErrores(errores){

    borrarElementosAnteriores()
    let cantidadErrores = 0;
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    keys.forEach(function(key){
        const error = errores[key];
        if (error){
            cantidadErrores++;
            $form[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;
            $error.className = 'lista-errores';
            $errores.appendChild($error);

        } else{
            $form[key].className = '';
        }
    });
    return cantidadErrores;
}
$form.onsubmit = validarFormulario;



function redireccionar(){
    location.href="wishlist.html";
}

function borrarElementosAnteriores(){
    const $lista = document.querySelectorAll('.lista-errores');
    for (i = 0; i < $lista.length ; i++){
        $lista[i].remove()
    }
}
