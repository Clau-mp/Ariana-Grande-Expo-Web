
// PANTALLA DE CARGA

let contador = 0;
let floresAnimadas = false;
function carga () {
    if(contador  <= 100){
        document.getElementById('porcentaje').innerHTML = contador + '%';
        if(contador >= 90 && !floresAnimadas){
            document.getElementById('loading-flowers-left').classList.add('flowers-bounce');
            document.getElementById('loading-flowers-right').classList.add('flowers-bounce');
            floresAnimadas = true
        }
        contador = contador + 1;
        setTimeout(carga, 15);
    } else{
        setTimeout(() => {
            document.getElementById('pantalla-de-carga').style.top = '-100%';
            document.getElementById('pantalla-de-carga').style.opacity = '0';
            document.getElementById('loading-flowers-left').style.opacity = '0';
            document.getElementById('loading-flowers-right').style.opacity = '0';
        },1000);
    }
}

window.onload = function(){
    carga();
};




// BARRA DE NAVEGACIÓN

function openMenu() {

    document.getElementById("menu").style.left = "0";
    document.getElementById("bar-icon").style.display = "none";
    document.getElementById("x-icon").style.display = "block";
}


function closeMenu() {
    document.getElementById("menu").style.left = "-100%";
     document.getElementById("bar-icon").style.display = "block";
    document.getElementById("x-icon").style.display = "none";
}
//  CARRUSEL
window.addEventListener("load", function() {
    var contenedor = document.querySelector(".gallery-carrusel-container");
    var fotos = document.querySelectorAll(".carrusel-photo");
    var indiceActual = 1;
    if(!contenedor || fotos.length === 0){return;}
    function moverCarrusel(){

        for(var i = 0; i < fotos.length; i++){
            fotos[i].classList.remove("active");
        }
        if(!contenedor || fotos.length === 0){return}

        if(fotos[indiceActual]){
            fotos[indiceActual].classList.add("active");
        }
        var anchoFoto = fotos[0].offsetWidth;
        var espacioGap = parseFloat(window.getComputedStyle(contenedor).gap) || 0;
        var anchoVentana = document.querySelector(".gallery-carrusel-window").offsetWidth;
        var desplazamiento = (anchoFoto + espacioGap) * (indiceActual - 1);
        contenedor.style.transform = "translateX(-" + desplazamiento + "px)";
    }

    moverCarrusel();
    window.addEventListener("resize", moverCarrusel);
    setInterval(function(){
        indiceActual++;
        if(indiceActual >= fotos.length - 1){
            indiceActual = 1;
        }
        moverCarrusel();
    },2500);

});

// MERCH
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".merch-carrusel");

    if (!gallery) return;

    let isDragging = false;

    gallery.addEventListener("pointerdown", function (e) {
        isDragging = true;
        gallery.setPointerCapture(e.pointerId);
        gallery.classList.add("dragging");
    });

    gallery.addEventListener("pointermove", function (e) {
        if (!isDragging) return;

        e.preventDefault();
        gallery.scrollLeft -= e.movementX;
    });

    gallery.addEventListener("pointerup", function (e) {
        isDragging = false;
        gallery.releasePointerCapture(e.pointerId);
        gallery.classList.remove("dragging");
    });

    gallery.addEventListener("pointercancel", function () {
        isDragging = false;
        gallery.classList.remove("dragging");
    });
});



