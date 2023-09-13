/*  JavaScrip boton de info */
var botones = document.querySelectorAll('.btn-expandir');
var texto_expandir = document.querySelectorAll('.texto_expandir');

botones.forEach((elemento, clave)=>{
    elemento.addEventListener('click', () => {
        console.log("clave")
        texto_expandir[clave].classList.toggle("abrir_cerrar")

    })
});

/* javaScrip Login  */
document.getElementById("btn_iniciar_sesion").addEventListener("click", iniciarSesion);
document.getElementById("btnn_registro").addEventListener("click", registro);
window.addEventListener("resize", anchoPag);

/*  Variables   */
var block_login_registro = document.querySelector(".block-login-registro");
var formulario_login = document.querySelector(".formulario_login");
var formulario_registrar = document.querySelector(".formulario_registrar");
var ventana_trasera_login = document.querySelector(".ventana-trasera_login");
var ventana_trasera_registro = document.querySelector(".ventana-trasera_registro");

/*  Funcion para el desplazamiento de la pagina */
function anchoPag(){
    if(window.innerWidth > 850){
        ventana_trasera_login.style.display = "block";
        ventana_trasera_registro.style.display= "block"
    }else{
        ventana_trasera_registro.style.display= "block";
        ventana_trasera_registro.style.opacity = "1";
        ventana_trasera_login.style.display = "none";
        formulario_login.style.display ="block";
        formulario_registrar.style.display ="none";
        block_login_registro.style.left="0px";
    }
}
anchoPag(); /* para no superponer texto de registro e iniciar   */

/*  Funcion para el desplazamienton del boton iniciar sesion    */
function iniciarSesion(){
    if(window.innerWidth > 850){
        formulario_registrar.style.display = "none";
        block_login_registro.style.left = "10px";
        formulario_login.style.display = "block";
        ventana_trasera_registro.style.opacity = "1";
        ventana_trasera_login.style.opacity = "0";
    }else{
        formulario_registrar.style.display = "none";
        block_login_registro.style.left = "0px";
        formulario_login.style.display = "block";
        ventana_trasera_registro.style.display = "block";
        ventana_trasera_login.style.display = "none";

    }

}

/*  Funcion para desplazamiento de boton registro   */
function registro(){
    if (window.innerWidth > 850){
        formulario_registrar.style.display = "block";
        block_login_registro.style.left = "410px";
        formulario_login.style.display = "none";
        ventana_trasera_registro.style.opacity = "0";
        ventana_trasera_login.style.opacity = "1";

    }else{
        formulario_registrar.style.display = "block";
        block_login_registro.style.left = "0px";
        formulario_login.style.display = "none";
        ventana_trasera_registro.style.display = "0";
        ventana_trasera_login.style.display = "block";
        ventana_trasera_login.style.opacity = "1";
    }

}
