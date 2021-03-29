function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío'
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
          'El campo nombre debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  );

  console.assert(
      validarNombre('Nicolas') === '',
      'validadNombre falló con un nombre válido'
  );

  console.assert(
      validarNombre('123123') === 'El campo nombre solo acepta letras',
      'validarNombre no valido que el nombre solo tenga letras.'
  );

}

function probarValidadCiudad() {
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'validadCiudad falló con un nombre de ciudad válido.'
    );

    console.assert(
        validarCiudad('') === 'Debes seleccionar una ciudad.',
        'validad ciudad no mostró un error cuando la ciudad es vacia.'
    );
}

function probarValidadDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'El campo descripción debe tener al menos 1 caracter',
        'validad descripcion regalo no mostro un error cuando la descripcion está vacía.'
    );

    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'Validar regalo fallo con una descripcion de regalo válida.'
    );

    console.assert(
        validarDescripcionRegalo('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'El campo descripción debe tener menos de 100 caracteres',
        'validad descripción regalo falló con una descripcion mayor a 100 caracteres.'
    );

    console.assert(
        validarDescripcionRegalo('.,....,,.,.') === 'El campo descripción solo puede tener números y letras.',
        'La funcion validad descripción falló con un ingreso incorrecto de caracteres.'
    )
}

probarValidadDescripcionRegalo();
probarValidarNombre();
probarValidadCiudad();
