# 🎁 Amigo Secreto

Proyecto realizado como práctica de **lógica de programación y manipulación del DOM**.  
La aplicación permite:

- Agregar nombres de amigos a una lista.
- Mostrar los amigos ingresados en pantalla.
- Sortear un amigo secreto de manera aleatoria.
- Validar entradas vacías y evitar errores en el sorteo.

---

## 🚀 Tecnologías utilizadas

- **HTML5** → estructura del proyecto.  
- **CSS3** → estilos y diseño responsivo.  
- **JavaScript (ES6)** → lógica de programación e interacción con el DOM.  

---

## 📂 Estructura de archivos


---

## 🖥️ Cómo ejecutar el proyecto

1. Clona este repositorio o descarga los archivos.  
2. Abre el archivo **`index.html`** en tu navegador preferido.  
3. ¡Listo! Ya podés usar la aplicación.  

---

## ✨ Uso de la aplicación

1. Escribe un nombre en el campo de texto.  
2. Haz clic en **"Añadir"** → el nombre aparecerá en la lista.  
3. Repite el proceso para agregar varios amigos.  
4. Haz clic en **"Sortear amigo"** para seleccionar uno al azar.  

---

## 🛠️ Funcionalidades implementadas

- **Agregar amigos**  
  - Captura el valor del input.  
  - Valida que no esté vacío.  
  - Limpia el campo después de agregar.  
  - Redibuja la lista completa en pantalla.  

- **Mostrar lista**  
  - Recorre el array de amigos con un bucle `for`.  
  - Crea dinámicamente elementos `<li>`.  
  - Evita duplicados al limpiar primero la lista.  

- **Sortear amigo**  
  - Valida que haya al menos un nombre cargado.  
  - Usa `Math.random()` y `Math.floor()` para elegir un índice aleatorio.  
  - Muestra el resultado en un contenedor separado.  
  - Limpia resultados previos antes de mostrar el nuevo.  

---

## ✅ Casos de prueba

- **Sin amigos cargados** → muestra un `alert` indicando que no se puede sortear.  
- **Un solo amigo cargado** → siempre se selecciona ese mismo amigo.  
- **Varios amigos cargados** → el sorteo siempre elige un nombre válido y nunca lanza error.  

---

## 📌 Posibles mejoras

- Evitar que se ingresen nombres duplicados.  
- Permitir eliminar amigos de la lista.  
- Guardar la lista en `localStorage` para que no se pierda al recargar.  
- Animaciones o estilos adicionales para mejorar la experiencia de usuario.  

---

👨‍💻 **Autor:** Iván Bigrevich  
📚 Proyecto creado como práctica de desarrollo web en JavaScript.
