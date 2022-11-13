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
    if(nombre() &&
    apellido()&&
    telephone() && nombre2()&& apellido2()){
        alert('Guardado')
    }
})

function nombre() {
    if (primerNombre.value == "") {
        primerNombre.classList.add('is-invalid')
        return false
    } else {
        primerNombre.classList.remove('is-invalid')
        primerNombre = localStorage.setItem("primerNombre", primerNombre.value)
        return true
    }
}

function apellido() {
    if (primerApellido.value == "") {
        primerApellido.classList.add('is-invalid')
        return false
    } else {
        primerApellido.classList.remove('is-invalid')
        primerApellido = localStorage.setItem('primerApellido', primerApellido.value)
        return true
    }
}
function telephone() {
    if (telefono.value == "") {
        telefono.classList.add('is-invalid')
        return false
    } else {
        telefono.classList.remove('is-invalid')
        telefono = localStorage.setItem('telefono', telefono.value)
        return true
    }
}
function nombre2(){
    if (segundoNombre.value != "") {
        segundoNombre = localStorage.setItem('segundoNombre', segundoNombre.value)
        return true
    }
    return false
}
function apellido2(){
    if (segundoApellido != "") {
        segundoApellido = localStorage.setItem('segundoApellido', segundoApellido.value)
        return true
    }
    return false
}