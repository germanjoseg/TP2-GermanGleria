const destacado = JSON.parse(localStorage.getItem("producto"));


const mostrarProducto = document.querySelector("#producto-elegido");
 
destacado.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card2";
    content.innerHTML = `
        <div>
        <div class="imagen">
            <img class="imagenProducto" src="${product.imagen}">
            <p class="descriptionLarge">${product.descripcionLarga}</p>
        </div>
        <div>
            <p class="price-product">${product.precio}</p>
            <p class="price-product">${product.puntaje}</p>
        </div>
    `;

    mostrarProducto.append(content);
});