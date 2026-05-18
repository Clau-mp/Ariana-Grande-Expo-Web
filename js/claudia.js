
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
var contendor = document.querySelector(".gallery-carrusel-container");
var fotos = document.querySelectorAll(".carrusel-photo");
var indiceActual = 1;
function moverCarrusel(){
    for(var i = 0; i < fotos.length; i++){
        fotos[i].classList.remove("active");
    }
    if (fotos[indiceActual]){
        fotos[indiceActual].classList.add("active");
    }
    var anchoFoto = 350; 
    if(fotos[0]){
        anchoFoto = fotos[0].offsetWidth
    }
    var espacioGap = parseFloat(window.getComputedStyle(contendor).gap)
}
