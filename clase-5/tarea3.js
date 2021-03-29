//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $calcularResultado = document.querySelector('#calcular');

$calcularResultado.onclick = function(){
    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;

    const $horas = document.querySelectorAll('.horas');
    const $minutos = document.querySelectorAll('.minutos');
    const $segundos = document.querySelectorAll('.segundos');

    for (let i = 0; i < $horas.length; i++) {
        horasTotales += Number($horas[i].value);
    }
   

    for (let i = 0; i < $minutos.length; i++){
        minutosTotales += Number($minutos[i].value)
    }
    
    for (let i = 0; i < $segundos.length; i++){
        segundosTotales += Number($segundos[i].value)
    }


    segundosFinal = segundosTotales%60;
    minutosFinal = Math.floor(segundosTotales/60) + minutosTotales%60;
    horasFinal = Math.floor(minutosTotales/60) + horasTotales; 


    // if (segundosTotales >= 60){
    //     let restoSegundos = segundosTotales % 60;
    //     let cocienteEnteroSegundos = Math.floor(segundosTotales/60);
    //     segundosTotales = restoSegundos;
    //     minutosTotales += cocienteEnteroSegundos;
    // } else {}

    // if (minutosTotales >= 60){
    //     let restoMinutos = minutosTotales % 60;
    //     let cocienteEnteroMinutos = Math.floor(minutosTotales/60);
    //     minutosTotales = restoMinutos;
    //     horasTotales += cocienteEnteroMinutos;
    // } else {}

    document.querySelector('strong').textContent = `La duración del curso es de ${horasFinal} horas, ${minutosFinal} minutos y ${segundosFinal} segundos. `

    return false;
}
