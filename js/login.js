const verifiedForm = document.getElementById("login");
verifiedForm = addEventListener("submit",verified);

function verified(e){
    let inputs = document.querySelectorAll("input");
    inputs.forEach(i => {
        if(i.value.trim() == ""){
            i.classList.add("is-invalid")
        } else {
            i.classList.remove("is-invalid")
        }
    }); for(let i of inputs){
        if(i.value.trim() == "")
        return e.preventDefault(), document.querySelector("label.pass-invalid").style.display="block", 
        document.querySelector("label.pass").style.display="none",
        document.querySelector("label.email-invalid").style.display="block",
        document.querySelector("label.email").style.display="none
    }
}
