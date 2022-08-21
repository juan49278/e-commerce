let verifiedForm = document.querySelectorAll("form-floating");
verifiedForm = addEventListener("submit", verified);
    function verifiedEmail(e){
        let email = document.getElementById('floatingInput')
        if(email.value.trim() == ""){
            email.classList.add("is-invalid"),document.getElementById('floatingInputInvalid').style.display='block',e.preventDefault()
        } else {
            email.classList.remove("is-invalid"),document.getElementById('floatingInputInvalid').style.display='none'
        }
    }
    function verifiedPass(e){
        let pass = document.getElementById('floatingPassword')
        if(pass.value.trim() == ""){
            pass.classList.add("is-invalid"),document.getElementById('floatingPasswordInvalid').style.display='block',e.preventDefault()
        } else {
            pass.classList.remove("is-invalid"),document.getElementById('floatingPasswordInvalid').style.display='none'
        }
    }
    function verified(e){
        if(verifiedEmail(e) || verifiedPass(e)){
            return
        }
    }
    function handleCredentialResponse(){
        window.location.replace("https://juan49278.github.io/e-commerce/post-login.html");
    }