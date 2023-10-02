fetch("productos.json").then((response) => response.json()).then((json) => {

  json.forEach((producto) => console.log(producto?.nombre));

  localStorage.setItem("productos", JSON.stringify(json));
});

const jsonProductos = JSON.parse(localStorage.getItem("productos"));
const listaDeProductos = document.querySelector("#lista-de-productos");
const productoElegido = [];

jsonProductos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "galeria";
  content.innerHTML = `
      <img class="imagenProducto" src="${product.imagen}">
      <p class="descripcion">${product.descripcion}</p>
      <p class="precio">${product.precio}</p>
  `;
  listaDeProductos.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  content.append(comprar);
  comprar.className = "Comprar";

  comprar.addEventListener("click", () => {
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
    location.href ="producto.html";
  });
});



