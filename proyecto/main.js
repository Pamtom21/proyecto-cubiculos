let listElements = document.querySelectorAll('.list__buttom--click');



listElements.forEach(hola => {
    hola.addEventListener('click', ()=>{
        hola.classList.toggle('arrow');
        let height = 0;
        let menu = hola.nextElementSibling;
        console.log(menu.scrollHeight)
        if(menu.clientHeight == 0){
            height=menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
    })
});