const url = 'https://japceibal.github.io/emercado-api/cats_products/101.json'
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(url).then((result) =>{
if(result.status = 'ok'){
    productsArray = result.data.products
    showData()
}
})
})

function showData(){
    const prodContent = document.getElementById('products-container')
    for(let product of productsArray){
prodContent.innerHTML += `
<div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active">
        <div class="row-3 d-flex">
            <div class="col-3">
            <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                <div class="col">
                </div>
                <small class="text-muted">${product.soldCount} vendidos</small>
            </div>
            <p class="mb-1">${product.description}</p>
    </div>
</div>`
}
}