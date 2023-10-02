fetch("productos.json").then((response) => response.json()).then((json) => {
  // console.log(json);
  json.forEach((producto) => console.log(producto?.nombre));

  localStorage.setItem("productos", JSON.stringify(json));
});

const jsonProductos = JSON.parse(localStorage.getItem("productos"));

const listaDeProductos = document.querySelector("#lista-de-productos");

const productoElegido = [];

jsonProductos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
      <img class="imagenProducto" src="${product.imagen}">
      <p class="description">${product.descripcion}</p>
      <p class="price">${product.precio}</p>
  `;

  listaDeProductos.append(content);

  let mas = document.createElement("button");
  mas.innerText = "Mas";
  content.append(mas);
  mas.className = "Mas";

  mas.addEventListener("click", () => {
    productoElegido.push({
      id: product.id,
      nombre: product.nombre,
      imagen: product.imagen,
      descripcion: product.descripcion,
      descripcionLarga: product.descripcionLarga,
      precio: product.precio,
      puntaje: product.puntaje,
    });

    localStorage.setItem("producto", JSON.stringify(productoElegido));

    console.log(productoElegido)

    location.href ="producto.html";

  });

});

