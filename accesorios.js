// Cargar productos desde el archivo JSON
fetch("accesorios.json")
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("lista-productos");

    data.forEach(producto => {
      const item = document.createElement("div");
      item.classList.add("producto");

      item.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h4>${producto.nombre}</h4>
        <p class="precio">${producto.precio} <span>${producto.precioAnterior || ""}</span></p>
        <p>${"⭐".repeat(producto.estrellas)}</p>
        <p>${producto.reseñas}</p>
      `;

      contenedor.appendChild(item);
    });
  })
  .catch(error => console.error("Error cargando productos:", error));
