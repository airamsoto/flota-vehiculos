const campoNombre = document.getElementById('usuario'); //cogemos el nombre que ha escrito el usuario
const errorNombre = document.getElementById('errorNombre');//cogemos el id del error
if (campoNombre && errorNombre) {
    campoNombre.addEventListener('input', function () { //cuando el usuario escriba en el campo...
        if ((campoNombre.value || '').trim().length < 3){ //si el nombre tiene menos de 3 caracteres...
            errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres.'; //mensaje de error
            campoNombre.classList.add('campo-invalido');
            campoNombre.classList.remove('campo-valido');
        } else {
            errorNombre.textContent = ''; //si no, no hay error
            campoNombre.classList.add('campo-valido');
            campoNombre.classList.remove('campo-invalido');
        }
    });
}

const campoApellidos = document.getElementById('apellidos'); //cogemos los apellido que ha escrito el usuario
const errorApellidos = document.getElementById('errorApellidos');//cogemos el id del error
if (campoApellidos && errorApellidos) {
    campoApellidos.addEventListener('input', function () { //cuando el usuario escriba en el campo...
        if ((campoApellidos.value || '').trim().length < 3){ //si el nombre tiene menos de 3 caracteres...
            errorApellidos.textContent = 'Los apellidos deben tener al menos 3 caracteres.'; //mensaje de error
            campoApellidos.classList.add('campo-invalido');
            campoApellidos.classList.remove('campo-valido');
        } else {
            errorApellidos.textContent = ''; //si no, no hay error
            campoApellidos.classList.add('campo-valido');
            campoApellidos.classList.remove('campo-invalido');
        }
    });
}

const campoEmail = document.getElementById('usuario_email'); //cogemos el email que ha puesto el usuario
const errorEmail = document.getElementById('errorMail') || document.getElementById('errorEmail'); 
if (campoEmail && errorEmail) {
    campoEmail.addEventListener('input', function () {
        if(/^\S+@\S+\.\S+$/.test((campoEmail.value || '').trim())) { //comprueba el formato jose@baute.jose
            errorEmail.textContent = '';
            campoEmail.classList.remove('campo-invalido');
            campoEmail.classList.add('campo-valido');
        } else {
            errorEmail.textContent = 'Formato de email incorrecto';
            campoEmail.classList.remove('campo-valido');
            campoEmail.classList.add('campo-invalido');
        }
    });
}

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
if (campoDuracion && errorDuracion) {
    campoDuracion.addEventListener('input', function(){
        const v = (campoDuracion.value || '').trim();
        if(/^\d+$/.test(v) && v.length > 0){
            errorDuracion.textContent = '';
            campoDuracion.classList.add('campo-valido');
            campoDuracion.classList.remove('campo-invalido');
        } else {
            errorDuracion.textContent = 'Horas de duracion no validas';
            campoDuracion.classList.remove('campo-valido');
            campoDuracion.classList.add('campo-invalido');
        }
    });
}

const campoFechaIni = document.getElementById ('fechaIni');
const errorFechaIni = document.getElementById ('errorFechaIni');
if (campoFechaIni && errorFechaIni) {
    campoFechaIni.addEventListener('input', function () {
        const today = new Date(); today.setHours(0,0,0,0);
        const fechaInicio = new Date((campoFechaIni.value || '') + 'T00:00:00');
        if (isNaN(fechaInicio.getTime()) || fechaInicio < today) {
            errorFechaIni.textContent = 'La fecha inicial debe ser posterior o igual a la actual';
            campoFechaIni.classList.add('campo-invalido');
            campoFechaIni.classList.remove('campo-valido');
        } else {
            errorFechaIni.textContent = '';
            campoFechaIni.classList.remove('campo-invalido');
            campoFechaIni.classList.add('campo-valido');
        }
    });
} 

const campoFechaFin = document.getElementById ('fechaFin');
const errorFechaFin = document.getElementById ('errorFechaFin');
if (campoFechaFin && errorFechaFin) {
    campoFechaFin.addEventListener('input', function () {
        const today = new Date(); today.setHours(0,0,0,0);
        const fechaFin = new Date((campoFechaFin.value || '') + 'T00:00:00');
        if (isNaN(fechaFin.getTime()) || fechaFin < today) {
            errorFechaFin.textContent = 'La fecha de fin debe ser posterior o igual a la actual';
            campoFechaFin.classList.add('campo-invalido');
            campoFechaFin.classList.remove('campo-valido');
        } else {
            errorFechaFin.textContent = '';
            campoFechaFin.classList.remove('campo-invalido');
            campoFechaFin.classList.add('campo-valido');
        }
    });
}

function validarFechas() {
    if (!campoFechaIni || !campoFechaFin || !errorFechaFin) return;
    const fechaIni = new Date((campoFechaIni.value || '') + 'T00:00:00');
    const fechaFin = new Date((campoFechaFin.value || '') + 'T00:00:00');

    if (isNaN(fechaIni.getTime()) || isNaN(fechaFin.getTime())) {
        // no hacer nada hasta que ambos estén seleccionados
        return;
    }

    if (fechaFin < fechaIni) {
        errorFechaFin.textContent = 'La fecha de fin no puede ser anterior a la de inicio';
        campoFechaFin.classList.add('campo-invalido');
    } else {
        errorFechaFin.textContent = '';
        campoFechaFin.classList.remove('campo-invalido');
        campoFechaFin.classList.add('campo-valido');
    }
}

//REVISAR ERRORES FORMULARIO
const vehiculoForm = document.getElementById('vehiculo_form');
const errorVehiculo = document.getElementById('errorVehiculo');
if (vehiculoForm && errorVehiculo) {
    vehiculoForm.addEventListener('input', function() {
        if ((vehiculoForm.value || '') === '') {
            errorVehiculo.textContent = 'Por favor, selecciona un vehículo.';
            vehiculoForm.classList.add('campo-invalido');
        } else {
            errorVehiculo.textContent = '';
            vehiculoForm.classList.remove('campo-invalido');
            vehiculoForm.classList.add('campo-valido');
        }
    });
}

if (campoFechaIni) campoFechaIni.addEventListener('input', validarFechas);
if (campoFechaFin) campoFechaFin.addEventListener('input', validarFechas);

const formulario_reserva = document.getElementById('formulario_reserva');
// no uses preventDefault en input; dejamos el listener vacío como placeholder
if (formulario_reserva) {
    formulario_reserva.addEventListener('input', function(event) {
        // validaciones por campo ya están registradas; aquí no prevenir nada
    });
}

const botonLimpiar = document.getElementById('btnLimpiar'); //cogemos el boton de limpiar
if (botonLimpiar) { //si existe el boton...
    botonLimpiar.addEventListener('click', function() { 
        console.log('Formulario reseteado');
        const f = document.getElementById('formulario_reserva'); //cogemos el formulario
        if (f) { //si existe el formulario...
            //reset nativo par que simplemente borre todo
            f.reset();

            //quitar clases de validación y aria-invalid
            f.querySelectorAll('.campo-valido, .campo-invalido').forEach(el => {
                el.classList.remove('campo-valido', 'campo-invalido');
                el.removeAttribute('aria-invalid');
            });

            //limpiar mensajes de error visibles
            f.querySelectorAll('span[id^="error"]').forEach(s => s.textContent = '');

            //reset barra de progreso si existe
            const prog = document.getElementById('formProgress');
            const progLabel = document.getElementById('progressLabel');
            if (prog) { prog.value = 0; prog.setAttribute('aria-valuenow', '0'); }
            if (progLabel) progLabel.textContent = '0%';
        }
    });
}

(function () {
    const form = document.getElementById('formulario_reserva');
    const progress = document.getElementById('formProgress');
    const progressLabel = document.getElementById('progressLabel');
    if (!form || !progress || !progressLabel) return;

    const emailRe = /^\S+@\S+\.\S+$/;
    const pwdRe = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

    const fields = [
        { id: 'usuario', validate: el_=> (el_.value || '').trim().length >= 3 },
        { id: 'apellidos', validate: el_=> (el_.value || '').trim().length >= 3 },
        { id: 'usuario_email', validate: el => emailRe.test((el.value || '').trim()) },
        { id: 'password', validate: el => pwdRe.test(el.value || '') },
        { id: 'vehiculo_form', validate: el => !!el.value && el.value !== '', includeIfNonEmpty: true },
        { id: 'duracion', validate: el => /^\d+$/.test((el.value || '').trim()) },
        { id: 'fechaIni' },
        { id: 'fechaFin' },
        { id: 'horaIni' },
        { id: 'horaFin' },
        { id: 'aceptarCondiciones', validate: el => el.checked }
    ];

    function updateProgress() {
        let total = 0, valid = 0;
        fields.forEach(f => {
            const el = document.getElementById(f.id);
            if (!el) return;
            const hasValue = (el.type === 'checkbox') ? el.checked : String(el.value || '').trim() !== '';
            const include = el.required || hasValue || f.includeIfNonEmpty;
            if (!include) return;
            total++;
            let ok = false;
            if (typeof f.validate === 'function') {
                try { ok = !!f.validate(el); } catch (e) { ok = false; }
            } else if (typeof el.checkValidity === 'function') {
                ok = el.checkValidity();
            } else {
                ok = hasValue;
            }
            // adicional: comprobar relación fechas si están ambas
            if ((f.id === 'fechaIni' || f.id === 'fechaFin') && document.getElementById('fechaIni') && document.getElementById('fechaFin')) {
                const fi = document.getElementById('fechaIni'), ff = document.getElementById('fechaFin');
                if (String(fi.value || '').trim() && String(ff.value || '').trim()) {
                    const d1 = new Date(fi.value + 'T00:00:00'), d2 = new Date(ff.value + 'T00:00:00');
                    if (!isNaN(d1.getTime()) && !isNaN(d2.getTime()) && d2 < d1) ok = false;
                }
            }
            if (ok) valid++;
        });

        const pct = total ? Math.round((valid / total) * 100) : 0;
        progress.value = pct;
        progress.setAttribute('aria-valuenow', String(pct));
        progressLabel.textContent = pct + '%';
    }

    form.addEventListener('input', updateProgress);
    form.addEventListener('change', updateProgress);
    form.addEventListener('reset', function () {
        // dejar que reset aplique antes de recalcular / limpiar clases
        setTimeout(() => {
            // quitar clases de validación por seguridad
            form.querySelectorAll('.campo-valido, .campo-invalido').forEach(el => {
                el.classList.remove('campo-valido', 'campo-invalido');
                el.removeAttribute('aria-invalid');
            });
            updateProgress();
        }, 0);
    });

    // inicializar
    updateProgress();
})();