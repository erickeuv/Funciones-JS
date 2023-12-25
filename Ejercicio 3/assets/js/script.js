function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const paint = document.getElementById("ele1");

paint.addEventListener("click", function() {
    pintar(paint, 'yellow');
});

pintar(paint)