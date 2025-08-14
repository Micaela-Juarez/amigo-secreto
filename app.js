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
    lista.innerHTML = ""; // Vaciar la lista

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}