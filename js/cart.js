let url = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let productoAdded = JSON.parse(localStorage.getItem('productoAdded'))

addEventListener('DOMContentLoaded', async ()=>{
    let promise = await fetch(url);
    let data = await promise.json();
    showCart = data.articles
    productoAdded
    show()
})

function show(){
    for(let articles of showCart){
        const {id, name, count, unitCost, currency, image} = articles
        cart.innerHTML = `<tr>
        <th><img src="${image}" class="img-fluid float-md-start cursor-active" width="100" onclick="idProducts(${id})"></th>
        <td class="text-muted">${name}</td>
        <td class="text-muted">${currency} <span class="cost">${unitCost}</span></td>
        <td><input type="number" placeholder="${count}" min="0" class="col-7 col-md-3 count" oninput="calcular()"></td>
        <td><strong>${currency} <span id="result">${unitCost}</strong></span></td>
        </tr>`
    }
    for(let i= 0; i< productoAdded; i++){
        const{name, image, currency} = data
        const productAdded = document.getElementById("cart").data
        let toAppened = []
        toAppened = `<th><img src="${image}" class="img-fluid float-md-start cursor-active" width="100">
        </th>
        <td class="text-muted">${name}</td>
        <td class="text-muted"><span class="cost">${currency}</span></td>
        <td><input type="number" min="0" class="col-7 col-md-3 count" oninput="calcular()"></td>
        <td><strong><span id="result">${currency}</strong></span></td>`
        productAdded.innerHTML = toAppened
    }
}
function calcular(){
    let a = document.querySelector('input.count').value;
    let b = document.querySelector('span.cost').innerText;
    let resultado = parseInt(a) * parseInt(b);
    if(isNaN(resultado)){
        return 0;
    } else if(resultado <=0){
alert("La cantidad minima es 1")
    } else {
    result.innerText = parseInt(resultado);
}
}
function idProducts(id){
    localStorage.setItem('items', id)
    window.location.href = "product-info.html"
}
