let amigos = [];

function añadirAmigo() {
    let nombre = document.getElementById("amigo").value;
    let nombreLimpio = nombre.trim();

    if (nombreLimpio !== "") {
        amigos.push(nombreLimpio); // Guardar en el array
        document.getElementById("amigo").value = ""; // Limpiar el input
        mostrarLista(); // Redibujar la lista completa
    } else {
        alert("Por favor, inserte un nombre");
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear elemento
        li.textContent = amigos[i]; // Asignar texto
        lista.appendChild(li); // Agregarlo a la <ul>
    }
}