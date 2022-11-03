let url = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let productoAdded = {}

addEventListener('DOMContentLoaded', async () => {
    let promise = await fetch(url);
    let data = await promise.json();
    productoAdded = data.articles
    if (JSON.parse(localStorage.getItem('productoAdded')) != undefined) {
        (JSON.parse(localStorage.getItem('productoAdded')).forEach(product => {
            productoAdded.push(product)
        }))
    }
    productoAdded

    for (let product of productoAdded) {
        const { id, name, unitCost, currency, image } = product
        cart.innerHTML += `<tr>
        <th><img src="${image}" class="img-fluid float-md-start cursor-active" width="125" onclick="idProducts(${id})"></th>
        <td class="text-muted">${name}</td>
        <td class="text-muted">${currency} <span class="cost">${unitCost}</span></td>
        <td><input type="number" placeholder="1" value="1" min="1" class="form-control count" oninput="calcular()"></td>
        <td><strong>${currency} <span class="result">${unitCost}</strong></span></td>
        </tr>`
    }
})

function calcular() {
    let campos = document.querySelectorAll('input.count');
    for (let i = 0; i < campos.length; i++) {
        let a = document.querySelectorAll('span.cost')[i].innerHTML;
        let b = document.querySelectorAll('input.count')[i].value;
        let c = b * a;
        if (b === '') {
            return cantCart()
        }
        document.querySelectorAll('span.result')[i].innerHTML = c
        !cantCart()
    }
}
addEventListener('input', () => {
    let spanResults = document.querySelectorAll(`span.result`);
    let resultado = 0;

    spanResults.forEach(function (spanResults) {
        resultado += parseInt(spanResults.innerHTML) || 0;
    })
    productCosts.innerHTML = resultado
    let standarEnvio = document.getElementById('standardradio')
    let expressEnvio = document.getElementById('expressradio')
    let premiumEnvio = document.getElementById('premiumradio')
    if (standarEnvio.checked === true) {
        comissionCost.innerHTML = standarEnvio.value * parseInt(productCosts.innerText)
    } if (expressEnvio.checked === true) {
        let redondeo = expressEnvio.value * parseInt(productCosts.innerText)
        comissionCost.innerHTML = Math.round(redondeo)
    } else if (premiumEnvio.checked === true) {
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
    error = 0
    document.querySelectorAll('input[type=number]').forEach(input => {
        if ((input.value == "") || (parseInt(input.value) <= 0)) {
            error += 1
            input.classList.add('border', 'border-danger', 'is-invalid')
        } else {
            input.classList.remove('border', 'border-danger', 'is-invalid')
        }
    })
    return error == 0
}

function checkDirection() {
    document.querySelectorAll('input[name=street]').forEach(input => {
        if (input.value === "") {
            input.classList.add('is-invalid')

        } else {
            input.classList.remove('is-invalid')
        }
    })
}
function finish() {
    if (validationPayMethod() || checkDirection()) {
        showSuccess()
    }
}
function idProducts(id) {
    localStorage.setItem('items', id)
    window.location.href = "product-info.html"
}
const swal = require('sweetalert2');
function showSuccess() {
    Swal.fire({
        title: 'Listo!',
        text: 'Se realizo la compra correctamente',
        icon: 'success'
    })
}