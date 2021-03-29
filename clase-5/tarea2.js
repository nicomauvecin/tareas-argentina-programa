//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

document.querySelector('#mandar-saludo').onclick = function(){
    const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
    const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const apellidoUsuario = document.querySelector('#apellido-usuario').value;    
    const edadUsuario = document.querySelector('#edad-usuario').value;
    
    const nombreCompleto = `${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}`
    
    document.querySelector('#mensaje-de-saludo').textContent = `Hola ${nombreCompleto}! Bienvenido a mi página, tenés ${edadUsuario} años.`;
    document.querySelector('h1').textContent = `Bienvenido, ${nombreCompleto}`;
    return false;
}
