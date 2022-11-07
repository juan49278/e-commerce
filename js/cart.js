let url = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let standarEnvio = document.getElementById('standardradio')
let expressEnvio = document.getElementById('expressradio')
let premiumEnvio = document.getElementById('premiumradio')
let total = document.getElementById('totalCost')

addEventListener('DOMContentLoaded', async () => {
    let cartAdded = {}
    if ((localStorage.getItem('productoAdded') == '[]') || (localStorage.getItem('productoAdded') == undefined)) {
        const response = await fetch(url)
        const data = await response.json()
        cartAdded = data.articles;
        localStorage.setItem('productoAdded', JSON.stringify(cartAdded));

    } else {
        cartAdded = JSON.parse(localStorage.getItem('productoAdded'))
    }
    showCart(cartAdded)
    cantCart()
})

function showCart(list) {
    cart.innerHTML = ""
    for (product of list) {
        const { id, name, unitCost, currency, image } = product
        cart.innerHTML += `<tr>
        <th><img src="${image}" class="img-fluid float-md-start cursor-active" width="125" onclick="idProducts(${id})"></th>
        <td class="text-muted">${name}</td>
        <td class="text-muted">${currency} <span class="cost">${unitCost}</span></td>
        <td><input type="number" placeholder="1" name="unit" value="1" min="1" class="form-control count" oninput="calcular()"></td>
        <td><strong>${currency} <span class="result">${unitCost}</strong></span></td>
        <td><button <i onclick="deleteItem(${id})" class="fa fa-trash" aria-hidden="true"></i></button></td>
        </tr>`
    }
}

function calcular() {
    let campos = document.querySelectorAll('input.count');
    for (let i = 0; i < campos.length; i++) {
        let a = document.querySelectorAll('span.cost')[i].innerHTML;
        let b = document.querySelectorAll('input.count')[i].value;
        let c = b * a;
        if (b == 0) {
            cantCart()
        }
        !cantCart()
        document.querySelectorAll('span.result')[i].innerHTML = c
    }
}
addEventListener('input', () => {
    let spanResults = document.querySelectorAll(`span.result`);
    let resultado = 0;

    spanResults.forEach(function (spanResults) {
        resultado += parseInt(spanResults.innerHTML) || 0;
    })
    productCosts.innerHTML = resultado
    if (standarEnvio.checked) {
        comissionCost.innerHTML = standarEnvio.value * parseInt(productCosts.innerText)
    } if (expressEnvio.checked) {
        let redondeo = expressEnvio.value * parseInt(productCosts.innerText)
        comissionCost.innerHTML = Math.round(redondeo)
    } else if (premiumEnvio.checked) {
        comissionCost.innerHTML = premiumEnvio.value * parseInt(productCosts.innerText)
    }

    let totalCost = parseInt(comissionCost.innerText) + parseInt(productCosts.innerText)
    document.getElementById('totalCost').innerHTML = totalCost
})

function paymentMethod() {
    if (document.getElementById('account').checked) {
        document.querySelectorAll('.target').forEach(input => {
            input.disabled = true
        })
        document.querySelectorAll('.account').forEach(input => {
            input.disabled = false
        })
        methodBuy.innerHTML = 'Transferencia bancaria'
    } else {
        document.querySelectorAll('.target').forEach(input => {
            input.disabled = false
        })
        document.querySelectorAll('.account').forEach(input => {
            input.disabled = true
        })
        methodBuy.innerHTML = 'Tarjeta de crédito'
    }
}

function validationPayMethod() {
    error = 0
    document.querySelectorAll('input.target, input.account').forEach(input => {
        if ((!input.disabled) && (input.value == '')) {
            method.classList.add('is-invalid')
            error += 1
        }
    })
    return (error == 0 ? (method.classList.remove('is-invalid'), true) :
        false)
}

function cantCart() {
    document.querySelectorAll('input[name=unit]').forEach(input => {
        if ((input.value <= 0)) {
            input.classList.add('border', 'border-danger', 'is-invalid')
            showErrorCant();
        } else {
            input.classList.remove('border', 'border-danger', 'is-invalid')
        }
    })
    return true
}
(() => {
    let forms = document.querySelectorAll('.needs-validation');
    let div = document.getElementById('directionUncomplete')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    div.classList.add('d-block')
                } if (form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    div.classList.remove('d-block')
                }
                form.classList.add('was-validated');
            }, false);
        });
})()

function deleteItem(id) {
    listActual = JSON.parse(localStorage.getItem('productoAdded'));
    listUpdate = listActual.filter(item => item.id != id);
    localStorage.setItem('productoAdded', JSON.stringify(listUpdate))
    if (listUpdate == "" || listUpdate == undefined) {
        listUpdate = []
        localStorage.setItem('productoAdded', JSON.stringify(listUpdate))
    }
    showCart(listUpdate)
}
function showSuccess() {
    Swal.fire({
        title: 'Listo!',
        text: 'Compra realizada con exito',
        icon: 'success'
    })
}
function showErrorCant() {
    Swal.fire({
        title: 'Error',
        text: 'La cantidad minima por articulo es 1',
        icon: 'error'
    })
}

function finish() {
    check1 = validationPayMethod();
    check2 = document.getElementById('formDirection').noValidate
    check3 = cantCart();
    check4 = total.innerText == "0"
    if ((check1) && (check2) && (!check4)) {
        showSuccess()
    }
}

function idProducts(id) {
    localStorage.setItem('items', id)
    window.location.href = "product-info.html"
}

const swal = require('sweetalert2');