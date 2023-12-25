// Variables globales para almacenar colores
let keyColor = 'white';

// Función para cambiar el color del div "key"
function cambiarColorKey(color) {
    const keyDiv = document.getElementById("key");
    keyDiv.style.backgroundColor = color;
}

// Evento al hacer clic en los divs azul, rojo, verde y amarillo
document.getElementById("azul").addEventListener("click", function() {
    this.style.backgroundColor = 'black';
});

document.getElementById("rojo").addEventListener("click", function() {
    this.style.backgroundColor = 'black';
});

document.getElementById("verde").addEventListener("click", function() {
    this.style.backgroundColor = 'black';
});

document.getElementById("amarillo").addEventListener("click", function() {
    this.style.backgroundColor = 'black';
});

// Evento al presionar teclas a, s, d, q, w, e
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        keyColor = 'pink';
    } else if (event.key === 's') {
        keyColor = 'orange';
    } else if (event.key === 'd') {
        keyColor = 'skyblue';
    } else if (event.key === 'q') {
        // Crear nuevo div morado
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.height = "200px";
        nuevoDiv.style.backgroundColor = 'purple';
        document.body.appendChild(nuevoDiv);
    } else if (event.key === 'w') {
        // Crear nuevo div gris
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.height = "200px";
        nuevoDiv.style.backgroundColor = 'gray';
        document.body.appendChild(nuevoDiv);
    } else if (event.key === 'e') {
        // Crear nuevo div café
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.height = "200px";
        nuevoDiv.style.backgroundColor = 'brown';
        document.body.appendChild(nuevoDiv);
    }

    // Cambiar color del div "key" según la tecla presionada
    cambiarColorKey(keyColor);
});