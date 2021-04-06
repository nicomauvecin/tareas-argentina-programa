

function calcularMenor(edadIntegrantes){
    let menorNumero = Number(edadIntegrantes[0].value);

    for (let i = 0; i < edadIntegrantes.length; i++) {
        if (menorNumero > edadIntegrantes[i].value){
            menorNumero = edadIntegrantes[i].value;
        }

    }   
    return menorNumero;
}

function calcularMayor(edadIntegrantes){
    let mayorNumero = Number(edadIntegrantes[0].value);
    for (let i = 0; i < edadIntegrantes.length; i++){
        if (mayorNumero < edadIntegrantes[i].value){
            mayorNumero = edadIntegrantes[i].value;
        }
    }
    return mayorNumero;
}

function calcularPromedio(edadIntegrantes){
    let sumador = 0;
    for (let i = 0; i < edadIntegrantes.length; i++){
        sumador = sumador + Number(edadIntegrantes[i].value);
    }
    return sumador / edadIntegrantes.length;
}
