//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:


// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."

const $valoresNumericos = document.querySelectorAll('li');

document.querySelector('#calcular-promedio').onclick = function (){
    let suma = 0;
    for (let i = 0; i < $valoresNumericos.length; i++) {   
        suma = suma + Number($valoresNumericos[i].textContent);
    }
    let promedio = suma / $valoresNumericos.length;
    document.querySelector('em').textContent = `El promedio es ${promedio}`; 

    return false;
}

// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."

document.querySelector('#calcular-menor').onclick = function(){
    let menorNumero = Number($valoresNumericos[0].textContent)

    for (let i = 0; i < $valoresNumericos.length; i++) {
        if (menorNumero > Number($valoresNumericos[i].textContent)){

            menorNumero = Number($valoresNumericos[i].textContent);
        } else {}

    }
    document.querySelector('em').textContent = `El número más chico es ${menorNumero}`;
    return false;
}

// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."

document.querySelector('#calcular-mayor').onclick = function(){
    let mayorNumero = Number($valoresNumericos[0].textContent)

    for (let i = 0; i < $valoresNumericos.length; i++) {
        if (mayorNumero < Number($valoresNumericos[i].textContent)){

            mayorNumero = Number($valoresNumericos[i].textContent);
        } else {}

    }
    document.querySelector('em').textContent = `El número más grande es ${mayorNumero}`;
    return false;
}

// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

document.querySelector('#calcular-frecuente').onclick = function(){
    let masFrecuente;
    for (let i = 0; i < $valoresNumericos.length; i++){
        for (let j = i +1; j < $valoresNumericos.length; j++) {
            if (Number($valoresNumericos[i].textContent) === Number($valoresNumericos[j].textContent)){
                    masFrecuente = Number($valoresNumericos[i].textContent);
            }
        }
    }
    document.querySelector('em').textContent = `El número más frecuente es ${masFrecuente}`;
    return false;
}
