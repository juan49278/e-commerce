let ids = localStorage.getItem('items')
let URL = `https://japceibal.github.io/emercado-api/products/${ids}.json`
let comentariosURL = `https://japceibal.github.io/emercado-api/products_comments/${ids}.json`

document.addEventListener('DOMContentLoaded', () => {
    let result= {}
    getJSONData(URL)
    .then((response) =>{
        if(response.status == 'ok'){
            result = response
            return result
            
        }})
    .then((result) => {
            const {data: elements} = result;
            const { category, cost, 
                    currency, description, 
                    images, name, soldCount } = elements
            document.getElementById('nameProduct').innerHTML = name
            document.getElementById('contentProduct').innerHTML = `
            <h5><strong>Precio</strong></h5>
            <p>${currency} ${cost}</p>
            <h5><strong>Descripción</strong></h5>
            <p>${description}</p>
            <h5><strong>Categoría</strong></h5>
            <p>${category}</p>
            <h5><strong>Cantidad de vendidos</strong></h5>
            <p>${soldCount} vendidos</p>
            <h5 class="pb-1"><strong>Imágenes ilustrativas</strong></h5>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Mostrar Imagenes del producto
            </button>
            <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <div class="row pt-2 d-flex" id='containerImages'>
            </div>
        </div>
    </div>
            `
            for(let i = 0; i < images.length ; i++){
                document.getElementById('containerImages').innerHTML += `
                <div class="card gx-4 justify-content-between" style="width: 25%; border:none">
                    <img src="${images[i]}" class="img-fluid" alt="...">
                </div>
                `
            }
        })
    
    getJSONData(comentariosURL)
        .then((response) => {
            if(response.status == 'ok'){
                result = response
                return result;
                }})
        .then((result) => {
            const {data: comentarios} = result;
            for(producto of comentarios){
                const {dateTime, description,user} = producto
                mostrarComentarios(user, dateTime, description);
            }

            document.querySelectorAll('.qualified').forEach((producto, index) => {
                for(let i = 0; i < comentarios[index].score; i++){
                    producto.children[i].classList.add('checked')
                }
            })    
        })
    })
        function mostrarComentarios(user, dateTime, description){
            document.getElementById('listComment').innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 justify-content-between">
                    <div class="text-start">
                        <span class="fw-bold">${user}</span> - ${dateTime} -
                        <span class = 'qualified'> 
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </span>
                    </div>
                    <p class='text-muted mb-0 pt-1 text-start'>${description}</p>
                </div>   
            </li>
            `
        }

        document.getElementById("comentar").addEventListener('click', () => {
            let user = localStorage.getItem('email').split('@')[0]
            let date = new Date();
            let timeFormat = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
            let dateFormat = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
            let dateTime = dateFormat+" "+timeFormat;	
            const descripcion = document.getElementById('descripcion').value;
            const puntuacion = document.getElementById('puntuacion').value;
            document.getElementById('lastComment').innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 justify-content-between">
                    <div class="text-start">
                        <span class="fw-bold">${user}</span> - ${dateTime} -
                        <span class = 'qualifiedID ${ids}' id='qualified'> 
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </span>
                    </div>
                    <p class='text-muted mb-0 pt-1 text-start'>${descripcion}</p>
                </div>   
            </li>
            `
            for(let i = 0; i < puntuacion; i ++){
                document.querySelectorAll('.qualifiedID')[document.querySelectorAll('.qualifiedID').length -1]
                .children[i].classList.add('checked');
            }
            /* let comment = document.getElementById('lastComment').innerHTML;
            localStorage.setItem(`saveComments`,comment); */
            
        })