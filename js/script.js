/*Menu*/

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click" , () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click" , () => {
    nav.classList.remove("visible");
})


/*Validacion de formulario*/  
const nombre = document.getElementById("name")
const apellido = document.getElementById("apellidos")
const documento = document.getElementById("dni")
const ubicacion = document.getElementById("direccion")
const contacto = document.getElementById("telefono")
const correo = document.getElementById("email")
const comentario = document.getElementById("comentarios")

const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    let entrar = false
    if (nombre.value.length <2){
        alert ("El nombre no es valido")
        warnings += `El nombre no es valido <br>` 
        entrar = true

    }
    if (apellido.value.length <2){
        alert ("El apellido no es valido")
        warnings += `El apellido no es valido <br>` 
        entrar = true

    }
    if (documento.value.length <8){
        alert ("El Dni es incorrecto")
        warnings += `El DNI no es valido <br>` 
        entrar = true

    }

    if (ubicacion.value.length <5){
        alert ("La direccion es incorrecta")
        warnings += `La dirección no es valida <br>` 
        entrar = true

    }
    if (contacto.value.length <10){
        alert ("El teléfono es incorrecto")
        warnings += `El teléfono no es valido <br>` 
        entrar = true

    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>` 
        entrar= true

    }
    if (comentario.value.length <10){
        alert ("El comentario es incompleto")
        warnings += `El comentario no es valido <br>` 
        entrar = true

    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})

