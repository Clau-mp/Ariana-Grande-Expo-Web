// ABOUT
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



// GALLERY









// TICKETS
const ticketInputs = document.querySelectorAll(".tickets-quantity");
const ticketTotal = document.getElementById("tickets-total-price");

function calculateTicketsTotal() {
    let total = 0;

    ticketInputs.forEach(function (input) {
        let quantity = Number(input.value);
        let price = Number(input.getAttribute("data-price"));

        total = total + quantity * price;
    });

    ticketTotal.innerHTML = total + "$";
}

ticketInputs.forEach(function (input) {
    input.addEventListener("input", calculateTicketsTotal);
});



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