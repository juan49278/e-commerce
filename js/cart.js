let url = "https://japceibal.github.io/emercado-api/user_cart/25801.json";
let productoAdded = {}

addEventListener('DOMContentLoaded', async ()=>{
    let promise = await fetch(url);
    let data = await promise.json();
    productoAdded = data.articles
    if(JSON.parse(localStorage.getItem('productoAdded')) != undefined){
    (JSON.parse(localStorage.getItem('productoAdded')).forEach(product => {
        productoAdded.push(product)
    }))
}
productoAdded

    for(let product of productoAdded){
        const {id, name, unitCost, currency, image} = product
        cart.innerHTML += `<tr>
        <th><img src="${image}" class="img-fluid float-md-start cursor-active" width="125" onclick="idProducts(${id})"></th>
        <td class="text-muted">${name}</td>
        <td class="text-muted">${currency} <span class="cost">${unitCost}</span></td>
        <td><input type="number" placeholder="1" value="1" min="1" class="form-control count" oninput="calcular()"></td>
        <td><strong>${currency} <span class="result">${unitCost}</strong></span></td>
        </tr>`
    }
})
function calcular(){
    let campos = document.querySelectorAll('input');
    for(let i=0; i < campos.length ;i ++){
    let a = document.querySelectorAll('span.cost')[i].innerHTML;
    let b = document.querySelectorAll('input.count')[i].value;
    let c = b * a;
    if(b===''){
        return a === 1
    }
    document.querySelectorAll('span.result')[i].innerHTML = c
    }
    }
function idProducts(id){
    localStorage.setItem('items', id)
    window.location.href = "product-info.html"
}
