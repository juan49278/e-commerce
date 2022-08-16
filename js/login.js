const verifiedForm = document.getElementById("login");
verifiedForm = addEventListener("submit",verified);

function verified(e){
    let inputs = document.querySelectorAll("input");
    inputs.forEach(i => {
        if(i.value == ""){
            i.classList.add("is-invalid")
        } else {
            i.classList.remove("is-invalid")
        }
    }); for(let i of inputs){
        if(i.value == "")
        return e.preventDefault()
    }
}