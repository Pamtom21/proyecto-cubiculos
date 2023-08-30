var botones = document.querySelectorAll('.btn-expandir');
var texto_expandir = document.querySelectorAll('.texto_expandir');

botones.forEach((elemento, clave)=>{
    elemento.addEventListener('click', () => {
        console.log("clave")
        texto_expandir[clave].classList.toggle("abrir_cerrar")

    })
});