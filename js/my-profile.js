//Creo las variables para guardar valores de los input en el localstorage
let email = localStorage.getItem('email')
let primerNombreLocal = localStorage.getItem('primerNombre')
let segundoNombreLocal = localStorage.getItem("segundoNombre")
let primerApellidoLocal = localStorage.getItem("primerApellido")
let segundoApellidoLocal = localStorage.getItem("segundoApellido")
let telefonoLocal = localStorage.getItem("telefono")
//Cargo los datos en los campos al cargar el DOM
addEventListener('DOMContentLoaded', () => {
    localStorage.setItem("imageDefault", "img/img_perfil.png")
    if (!localStorage.getItem('imageProfile')) {
        imgNew.src = localStorage.getItem('imageDefault')
    } else {
        imgNew.src = localStorage.getItem('imageProfile')
    }
    document.getElementById('email').value = email
    if (primerNombreLocal != "") {
        primerNombre.value = primerNombreLocal
    } else {
        primerNombre.value = ""
    } if (segundoNombreLocal != "") {
        segundoNombre.value = segundoNombreLocal
    } else {
        segundoNombre = ""
    } if (primerApellidoLocal != "") {
        primerApellido.value = primerApellidoLocal
    } else {
        primerApellido = ""
    } if (segundoApellidoLocal != "") {
        segundoApellido.value = segundoApellidoLocal
    } else {
        segundoApellido.value = ""
    } if (telefonoLocal != "") {
        telefono.value = telefonoLocal
    } else {
        telefono.value = ""
    }
})
//Guardo todos los valores de los campos
function nombre() {
    let primerNombre = document.getElementById('primerNombre').value
    primerNombre = localStorage.setItem("primerNombre", primerNombre)
}

function apellido() {
    let primerApellido = document.getElementById('primerApellido').value
    primerApellido = localStorage.setItem('primerApellido', primerApellido)
}
function telephone() {
    let telefono = document.getElementById('telefono').value
    telefono = localStorage.setItem('telefono', telefono)
}
function nombre2() {
    let segundoNombre = document.getElementById('segundoNombre').value
    segundoNombre = localStorage.setItem('segundoNombre', segundoNombre)
}
function apellido2() {
    let segundoApellido = document.getElementById('segundoApellido').value
    segundoApellido = localStorage.setItem('segundoApellido', segundoApellido)
}

//Quitamos esta manera de verificar para un mejor funcionamiento de la pagina
//Ya que nos dejaba en rojo los campos opcionales
/* function check() {
    input = document.querySelectorAll('input[name=profile]').forEach(input => {
        if (input.value != "") {
            input.classList.remove('is-invalid')
        } else {
            input.classList.add('is-invalid')
        }
    })
} */
//Alerta de exito al guardar datos
function alertSuccess() {
    if (formProfile.noValidate) {
        Swal.fire({
            title: 'Listo!',
            text: 'Los datos se actualizaron correctamente',
            icon: 'success'
        })
    }
}
//Checkeamos con la funcion de bootstrap
(() => {
    let forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } if (form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    formProfile.classList.add('validate')
                    alertSuccess()
                } else {
                    event.preventDefault();
                    event.stopPropagation();
                    formProfile.classList.remove('validate')
                }
                form.classList.add('was-validated');
            },);
        });
})()
//Addevenlistener para captar la imagen subida
document.querySelector('#imageUpload').addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {//Leemos la imagen la cargamos en localstorage
        localStorage.setItem('imageProfile', reader.result)
    })
    reader.readAsDataURL(this.files[0])//Para finalizar recargamos la pagina y asi muestra la imagen
    window.location.reload()
})
//Funcion para mostrar u ocultar boton de eliminar foto segun tenemos la imagen subida o por defecto
btnDelete.addEventListener('click', () => {
    localStorage.removeItem('imageProfile')
    window.location.reload()
})
if (imgNew.src = localStorage.getItem('imageProfile')) {
    btnDelete.classList.remove('disabled')
} else {
    btnDelete.classList.add('disabled')
}
//Importo Alertsweet2
const swal = require('sweetalert2');
