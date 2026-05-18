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

// OPEN HAMB
var ham = document.querySelector(".ham");
var navMobile = document.querySelector(".nav-mobile");

if (ham && navMobile) {
    ham.addEventListener("click", function () {
        navMobile.classList.toggle("active");
    });
}