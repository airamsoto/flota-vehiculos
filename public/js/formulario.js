

const campoNombre = document.getElementById('usuario'); //cogemos el nombre que ha escrito el usuario
const errorNombre = document.getElementById('errorNombre');//cogemos el id del error
campoNombre.addEventListener('input', function () { //cuando el usuario escriba en el campo...

    if(campoNombre.value.length < 3){ //si el nombre tiene menos de 3 caracteres...
        errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres.'; //mensaje de error
        campoNombre.classList.add('campo-invalido');
        campoNombre.classList.remove('campo-valido');
    } else {
        errorNombre.textContent = ''; //si no, no hay error
        campoNombre.classList.add('campo-valido');
        campoNombre.classList.remove('campo-invalido');
    }
});

const campoApellidos = document.getElementById('apellidos'); //cogemos los apellido que ha escrito el usuario
const errorApellidos = document.getElementById('errorApellidos');//cogemos el id del error
campoApellidos.addEventListener('input', function () { //cuando el usuario escriba en el campo...
    if(campoApellidos.value.length < 3){ //si el nombre tiene menos de 3 caracteres...
        errorApellidos.textContent = 'Los apellidos deben tener al menos 3 caracteres.'; //mensaje de error
        campoApellidos.classList.add('campo-invalido');
        campoApellidos.classList.remove('campo-valido');
    } else {
        errorApellidos.textContent = ''; //si no, no hay error
        campoApellidos.classList.add('campo-valido');
        campoApellidos.classList.remove('campo-invalido');
    }
});

const campoEmail = document.getElementById('usuario_email'); //cogemos el email que ha puesto el usuario
const emailError = document.getElementById('errorMail'); 
campoEmail.addEventListener('input', function () {
    if(/^\S+@\S+\.\S+$/.test(campoEmail.value)) { //comprueba el formato jose@baute.jose
        errorEmail.textContent = '';
        campoEmail.classList.remove('campo-invalido');
        campoEmail.classList.add('campo-valido');
    } else {
        errorEmail.textContent = 'Formato de email incorrecto';
        campoEmail.classList.remove('campo-valido');
        campoEmail.classList.add('campo-invalido');
    }
});

const campoPassword = document.getElementById('password'); //cogemos la contraseña que ha puesto el usuario
const errorPassword = document.getElementById('errorPassword');

if (campoPassword && errorPassword) {
    campoPassword.addEventListener('input', function () {
        if(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(campoPassword.value)) {
            errorPassword.textContent = '';
            campoPassword.classList.add('campo-valido');
            campoPassword.classList.remove('campo-invalido');
        } else {
            errorPassword.textContent = 'La contraseña debe tener al menos 8 caracteres, una mayuscula, un numero y un caracter especial';
            campoPassword.classList.remove('campo-valido');
            campoPassword.classList.add('campo-invalido');
        }
    });
}

const campoDuracion = document.getElementById('duracion');
const errorDuracion = document.getElementById('errorDuracion');
duracionReserva.addEventListener('input', function(){
    if(/^\d+$/.test(duracionReserva.value)){
        errorDuracion.textContent = '';
        campoDuracion.classList.add('campo-invalido');
        campoDuracion.classList.remove('campo-valido');
    }else{
        errorDuracion.textContent = 'Horas de duracion no validas'
        campoDuracion.classList.add('campo-valido');
        campoDuracion.classList.remove('campo-invalido');
    }
} )

const campoFechaIni = document.getElementById ('fechaIni');
const errorFechaIni = document.getElementById ('errorFechaIni');

campoFechaIni.addEventListener('input', function () {
    const fechaActual = new Date ();
    const fechaInicio = new Date (campoFechaIni.value);
    if(fechaInicio < fechaActual) {
        errorFechaIni.textContent = 'La fecha inicial debe ser posterior a la actual';
        campoFechaIni.classList.add('campo-invalido');
        campoFechaIni.classList.remove('campo-valido');
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

//REVISAR ERRORES FORMULARIO
const vehiculoForm = document.getElementById('vehiculo_form');
const errorVehiculo = document.getElementById('errorVehiculo');

vehiculoForm.addEventListener('input', function() {
    if (vehiculoForm.value === '') {
        errorVehiculo.textContent = 'Por favor, selecciona un vehículo.';
        console.log(vehiculoForm.value);
    } else {
        errorVehiculo.textContent = '';
        console.log(vehiculoForm.value);
    }
});

campoFechaIni.addEventListener('input', validarFechas);
campoFechaFin.addEventListener('input', validarFechas);


const formulario_reserva = document.getElementById('formulario_reserva');
//hay que hacer bien las comprobaciones
formulario_reserva.addEventListener('input', function(event) {
    event.preventDefault();
});



