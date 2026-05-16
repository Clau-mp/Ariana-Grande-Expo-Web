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