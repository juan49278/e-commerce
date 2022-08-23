let autos = async () => {
    let url = "https://japceibal.github.io/emercado-api/cats_products/101.json";
    let promise = await fetch(url);
    let datos = await promise.json()
    productsList = datos.products
    showList(datos.products)
}
autos();
    
    
    
    function showList(){
    for(let product of productsList){
        document.getElementById('products-container').innerHTML += `
<div class="list-group-item list-group-item-action cursor-active">
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