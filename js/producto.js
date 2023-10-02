const destacado = JSON.parse(localStorage.getItem("producto"));
const mostrarProducto = document.querySelector("#producto-elegido");
 
destacado.forEach((product) => {
    let content = document.createElement("div");
    content.className = "galeria2";
    content.innerHTML = `
        <div>
        <div class="imagen">
            <img class="imagenProducto" src="${product.imagen}">
        </div>
        <div class="imagen">
            <p class="descripcionLarga">${product.descripcionLarga}</p>
        </div>
        <div>
            <p class="precio2">${product.precio}</p>
            <p class="precio2">${product.puntaje}</p>
        </div>
    `;
    mostrarProducto.append(content);
});