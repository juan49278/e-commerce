let email = localStorage.getItem('email')
let primerNombreLocal = localStorage.getItem('primerNombre')
let segundoNombreLocal = localStorage.getItem("segundoNombre")
let primerApellidoLocal = localStorage.getItem("primerApellido")
let segundoApellidoLocal = localStorage.getItem("segundoApellido")
let telefonoLocal = localStorage.getItem("telefono")

addEventListener('DOMContentLoaded', () => {
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

save.addEventListener('click', () => {
    if(primerNombre.value != ""){
        primerNombre.classList.remove('is-invalid')
        primerNombre = localStorage.setItem("primerNombre", primerNombre.value)
    } else {
        primerNombre.classList.add('is-invalid')
    }
    
    segundoNombre = localStorage.setItem("segundoNombre", segundoNombre.value)
    primerApellido = localStorage.setItem("primerApellido", primerApellido.value)
    segundoApellido = localStorage.setItem("segundoApellido", segundoApellido.value)
    telefono = localStorage.setItem("telefono", telefono.value)
})