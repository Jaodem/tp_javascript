var total = 0;
var valorTicket = 200;
var importe = 0;
const spanNombre = document.getElementById('errorNombre');
const spanApellido = document.getElementById('errorApellido');
const spanMail = document.getElementById('errorMail');
const spanCantidad = document.getElementById('errorCantidad');
const spanTotal = document.getElementById('total');

calcular = () => {
    
    const categoria = document.getElementById("selectCategoria").value;
    const cantidad = document.getElementById("inputCantidad").value;
    
    const nombre = document.getElementById("inputName").value;
    const apellido = document.getElementById("inputLastname").value;
    const mail = document.getElementById("inputCorreo").value;
    
    if (!nombre && !apellido && !mail && !cantidad) {
        spanNombre.innerText = `El nombre es requerido`;
        spanApellido.innerText = `El apellido es requerido`;
        spanMail.innerText = `El mail es requerido`;
        spanCantidad.innerText = `La cantidad de tickets es requerida`;
    } else if (!nombre && !apellido && !mail) {
        spanNombre.innerText = `El nombre es requerido`;
        spanApellido.innerText = `El apellido es requerido`;
        spanMail.innerText = `El mail es requerido`;
        spanCantidad.innerText = ``;
    } else if (!nombre && !mail && !cantidad) {
        spanNombre.innerText = `El nombre es requerido`,
        spanMail.innerText = `El mail es requerido`;
        spanCantidad.innerText = `La cantidad de tickets es requerida`;
        spanApellido.innerText = ``;
    } else if (!apellido && !mail && !cantidad) {
        spanApellido.innerText = `El apellido es requerido`;
        spanMail.innerText = `El mail es requerido`;
        spanCantidad.innerText = `La cantidad de tickets es requerida`;
        spanNombre.innerText = ``;
    } else if (!nombre && !apellido && !cantidad) {
        spanApellido.innerText = `El apellido es requerido`;
        spanMail.innerText = ``;
        spanCantidad.innerText = `La cantidad de tickets es requerida`;
        spanNombre.innerText = `El nombre es requerido`;
    } else if (!mail && !cantidad) {
        spanApellido.innerText = ``;
        spanMail.innerText = `El mail es requerido`;
        spanCantidad.innerText = `La cantidad de tickets es requerida`;
        spanNombre.innerText = ``;
    } else if (!nombre && !cantidad) {
        spanApellido.innerText = ``;
        spanMail.innerText = ``;
        spanCantidad.innerText = `La cantidad de tickets es requerida`;
        spanNombre.innerText = `El nombre es requerido`;
    } else if (!mail && !nombre) {
        spanApellido.innerText = ``;
        spanMail.innerText = `El mail es requerido`;
        spanCantidad.innerText = ``;
        spanNombre.innerText = `El nombre es requerido`;
    } else if (!apellido && !cantidad) {
        spanApellido.innerText = `El apellido es requerido`;
        spanMail.innerText = ``;
        spanCantidad.innerText = `La cantidad de tickets es requerida`;
        spanNombre.innerText = ``;
    } else if (!apellido && !mail) {
        spanApellido.innerText = `El apellido es requerido`;
        spanMail.innerText = `El mail es requerido`;
        spanCantidad.innerText = ``;
        spanNombre.innerText = ``;
    } else if (!nombre && !apellido) {
        spanApellido.innerText = `El apellido es requerido`;
        spanMail.innerText = ``;
        spanCantidad.innerText = `La cantidad de tickets es requerida`;
        spanNombre.innerText = `El nombre es requerido`;
    } else if (!nombre) {
        spanNombre.innerText = 'El nombre es requerido';
        spanApellido.innerText = '';
        spanMail.innerText = '';
        spanCantidad.innerText = '';
    } else if (!apellido) {
        spanApellido.innerText = `El apellido es requerido`;
        spanNombre.innerText = '';
        spanMail.innerText = '';
        spanCantidad.innerText = '';
    } else if (!mail) {
        spanMail.innerText = `El mail es requerido`;
        spanNombre.innerText = '';
        spanApellido.innerText = '';
        spanCantidad.innerText = '';
    } else if (!cantidad) {
        spanCantidad.innerText = `La cantidad de tickets es requerida`;
        spanNombre.innerText = '';
        spanApellido.innerText = '';
        spanMail.innerText = '';
    } else {
        importe = valorTicket * cantidad;
        if (categoria == 1) {
            total = importe * 0.2;
        } else if (categoria == 2) {
            total = importe * 0.50;
        } else if (categoria == 3) {
            total = importe * 0.85;
        }
        spanApellido.innerText = ``;
        spanMail.innerText = ``;
        spanCantidad.innerText = ``;
        spanNombre.innerText = ``;
        spanTotal.innerHTML = `Total a pagar: $ ${total}`;
    }
}

borrar = () => {
    spanApellido.innerText = ``;
    spanMail.innerText = ``;
    spanCantidad.innerText = ``;
    spanNombre.innerText = ``;
    spanTotal.innerHTML = `Total a pagar: $`;
}

const btnCalcular = document.getElementById('botonCalcular');
btnCalcular.addEventListener('click', calcular);

const btnBorrar = document.getElementById('botonBorrar');
btnBorrar.addEventListener('click', borrar);