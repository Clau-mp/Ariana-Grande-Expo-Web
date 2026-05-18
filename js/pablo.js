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