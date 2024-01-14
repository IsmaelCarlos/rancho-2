var mostrar = document.querySelector(".incremt");
var ctt = 0;

mostrar.innerHTML = ctt;

function contador(){
    ctt++
    mostrar.innerHTML = ctt;
}

function decrementar(){
    ctt--
    mostrar.innerHTML = ctt;
    
}

