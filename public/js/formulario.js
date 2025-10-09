const campoNombre = document.getElementById('usuario'); //cogemos el nombre que ha escrito el usuario
const errorNombre = document.getElementById('errorNombre');//cogemos el id del error
campoNombre.addEventListener('input', function () { //cuando el usuario escriba en el campo...

    if(campoNombre.value.length < 3){ //si el nombre tiene menos de 3 caracteres...
        errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres.'; //mensaje de error
    } else {
        errorNombre.textContent = ''; //si no, no hay error
    }
});

const campoEmail = document.getElementById('usuario_email'); //cogemos el email que ha puesto el usuario
const emailError = document.getElementById('errorMail'); 
campoEmail.addEventListener('input', function () {
    if(/^\S+@\S+\.\S+$/.test(campoEmail.value)) { //comprueba el formato jose@baute.jose
        errorEmail.textContent = '';
    } else {
        errorEmail.textContent = 'Formato de email incorrecto';
    }
});

const campoFechaIni = document.getElementById ('fechaIni');
const errorFechaIni = document.getElementById ('errorFechaIni');

campoFechaIni.addEventListener('input', function () {
    const fechaActual = new Date ();
    const fechaInicio = new Date (campoFechaIni.value);
    if(fechaInicio < fechaActual) {
        errorFechaIni.textContent = 'La fecha inicial debe ser posterior a la actual';
    } else {
        errorFechaIni.textContent = '';
    }
});


const campoFechaFin = document.getElementById ('fechaFin');
const errorFechaFin = document.getElementById ('errorFechaFin');

campoFechaFin.addEventListener('input', function () {
    const fechaActual = new Date ();
    const fechaFin = new Date (campoFechaFin.value);
    if(fechaFin < fechaActual) {
        errorFechaFin.textContent = 'La fecha posterior debe ser posterior a la actual';
    } else {
        errorFechaFin.textContent = '';
    }
});



function validarFechas() {
    const fechaIni = new Date(campoFechaIni.value);
    const fechaFin = new Date(campoFechaFin.value);

    if (fechaFin < fechaIni) {
        errorFechaFin.textContent = 'La fecha de fin no puede ser anterior a la de inicio';
    } else {
        errorFechaFin.textContent = '';
    }
}

campoFechaIni.addEventListener('input', validarFechas);
campoFechaFin.addEventListener('input', validarFechas);


const formulario_reserva = document.getElementById('formulario_reserva');
//hay que hacer bien las comprobaciones
formulario_reserva.addEventListener('submit', function(event) {
    event.preventDefault();
});