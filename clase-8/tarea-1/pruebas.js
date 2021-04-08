function probarValidadIntegrantes(){
    console.assert(
        validarCantidadIntegrantes('') === 'El campo integrantes no puede estar vacío.',
        'Validar Integrantes no validó que el campo esté vacío o sea igual a 0.'
    )

    console.assert(
        validarCantidadIntegrantes('1') === 'El campo integrantes debe ser mayor a uno.',
        'Validar Integrantes no validó que el número de integrantes sea mayor a 1'
    )

    console.assert(
        validarCantidadIntegrantes('3,675') === 'El campo integrantes debe tener un valor entero.',
        'Validar Integrantes no validó que el número de integrantes sea un valor entero.'
    )

}

function probarValidarEdades(){
    for (let i = 0; i < validarEdades(document.querySelectorAll('.integrante')).length; i++) {
        console.assert(
            validarEdades('')[i] === 'El campo edad no puede estar vacío',
            'Validar Edades no validó que el campo esté vacio o sea igual a 0.'
        )
        console.assert(
            validarEdades('1,534')[i] === 'El campo edad solo debe tener un valor entero.',
            'Validar Edades no validó que el campo edad sea un número entero.'
        )
    }
}

probarValidadIntegrantes();
probarValidarEdades();
