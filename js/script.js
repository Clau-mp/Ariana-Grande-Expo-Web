
// PANTALLA DE CARGA

let contador = 0;
let floresAnimadas = false;
function carga () {
    let loader = document.getElementById('pantalla-de-carga');
    if (loader){
        if (sessionStorage.getItem("yaHaCargado")){
            loader.style.top = '-100%';
            loader.style.opacity = '0';
            document.getElementById('loading-flowers-left').style.opacity = '0';
            document.getElementById('loading-flowers-right').style.opacity = '0';
            document.getElementById('porcentaje').innerHTML = '100%';
            return;
        }
    }

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
        sessionStorage.setItem("yaHaCargado" , "true");
        setTimeout(() => {
            if (loader){
                loader.style.top = '-100%';
                loader.style.opacity = '0';
            }
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
//  CARRUSEL HOME
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

// MERCH HOME
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

// ABOUT SCROLL HORIZONTAL
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".about-gallery");

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


// GALLERY MODAL
var galleryImages = document.querySelectorAll(".gallery-img");
var galleryModal = document.getElementById("gallery-modal");
var galleryModalImg = document.getElementById("gallery-modal-img");
var galleryModalClose = document.getElementById("gallery-modal-close");
var galleryModalTitle = document.getElementById("gallery-modal-title");
var galleryModalDescription = document.getElementById("gallery-modal-description");

if (galleryImages.length > 0 && galleryModal && galleryModalImg && galleryModalClose) {

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            galleryModal.classList.add("active");

            galleryModalImg.src = image.src;
            galleryModalImg.alt = image.alt;

            if (galleryModalTitle) {
                galleryModalTitle.innerHTML = image.getAttribute("data-title");
            }

            if (galleryModalDescription) {
                galleryModalDescription.innerHTML = image.getAttribute("data-description");
            }

            document.body.classList.add("modal-open");
        });
    });

    galleryModalClose.addEventListener("click", function () {
        galleryModal.classList.remove("active");
        galleryModalImg.src = "";
        document.body.classList.remove("modal-open");
    });

    galleryModal.addEventListener("click", function (event) {
        if (event.target === galleryModal) {
            galleryModal.classList.remove("active");
            galleryModalImg.src = "";
            document.body.classList.remove("modal-open");
        }
    });
}




// OPEN HAMB
var ham = document.querySelector(".ham");
var navMobile = document.querySelector(".nav-mobile");

if (ham && navMobile) {
    ham.addEventListener("click", function () {
        navMobile.classList.toggle("active");
    });
}




// TICKETS CALC
var ticketInputs = document.querySelectorAll(".tickets-quantity");
var ticketTotal = document.getElementById("tickets-total-price");

if (ticketInputs.length > 0 && ticketTotal) {

    function calculateTicketsTotal() {
        var total = 0;

        ticketInputs.forEach(function (input) {
            var quantity = Number(input.value);
            var price = Number(input.getAttribute("data-price"));

            total = total + quantity * price;
        });

        ticketTotal.innerHTML = total + "$";
    }

    ticketInputs.forEach(function (input) {
        input.addEventListener("input", calculateTicketsTotal);
    });

    calculateTicketsTotal();
}


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