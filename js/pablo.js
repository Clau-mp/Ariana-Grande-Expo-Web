// ABOUT
const gallery = document.querySelector(".about-gallery");

let isDragging = false;
let startX;
let scrollStart;

if (gallery) {
  gallery.addEventListener("mousedown", function (event) {
    isDragging = true;
    startX = event.pageX;
    scrollStart = gallery.scrollLeft;
    gallery.classList.add("dragging");
  });

  gallery.addEventListener("mousemove", function (event) {
    if (isDragging === false) {
      return;
    }

    event.preventDefault();

    let distance = event.pageX - startX;
    gallery.scrollLeft = scrollStart - distance;
  });

  gallery.addEventListener("mouseup", function () {
    isDragging = false;
    gallery.classList.remove("dragging");
  });

  gallery.addEventListener("mouseleave", function () {
    isDragging = false;
    gallery.classList.remove("dragging");
  });
}



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

const ticketsForm = document.querySelector(".tickets-form");

if (ticketsForm) {
    ticketsForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });
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