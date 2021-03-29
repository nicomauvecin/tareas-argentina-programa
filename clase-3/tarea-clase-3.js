// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

let nombreUsuario = prompt('¿Cúal es tu nombre?' || '');
const miNombre = 'esteban';
const nombreHermano = 'francisco';

if (nombreUsuario.toLowerCase() === miNombre) {
    console.log(`Hola, Tocayo! Yo también me llamo ${nombreUsuario}`)
} else if (nombreUsuario.toLowerCase() === nombreHermano){
    console.log(`Hola ${nombreUsuario}, te llamás igual que mi hermano.`);
} else if (nombreUsuario.trim().toLowerCase().length === 0){
    console.log('No entiendo lo que me dijiste.')
} else {
    console.log(`Hola ${nombreUsuario.trim()}`);
}

// Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let edadUsuario = Number(prompt('¿Cúantos años tenés?'))
let miEdad = 24;
if (edadUsuario < miEdad){
    console.log('Tenés menor edad que yo.');
} else if (edadUsuario > miEdad){
    console.log('Tenés mayor edad que yo.');
} else if (edadUsuario === miEdad){
    console.log('Tenemos la misma edad.');
} else {
    console.log('No ingresaste bien tu edad.');
}




//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

let documentoUsuario = prompt('¿Tenés tu documento?');
if (documentoUsuario.toLowerCase() === 'si' ){
    let edadUsuario = Number(prompt('¿Que edad tenés?'));
    if (edadUsuario >= 18){
        console.log('Podés entrar al bar.');
    } else if (edadUsuario < 18) {
        console.log('No podés pasar, capo.');
    } else{
        console.log('No entiendo que me decis.');
    }
} else if (documentoUsuario.toLowerCase() === 'no'){
    console.log('No podés pasar, capo.');
} else{
    console.log('No entiendo que me decis.')
}

let edadUsuario = Number(prompt('¿Cúantos años tenés?'));
let documentoUsuario
if (edadUsuario >= 18){
    documentoUsuario = prompt('¿Tenés tu documento?').toLowerCase();
    if (documentoUsuario === 'si'){
        console.log('Podés entrar al bar.');
    } else {
        console.log('No podés pasar, capo.');
    }
} else {
    console.log('No podés pasar, capo.');
}