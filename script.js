// Año actual automático en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// Menú móvil accesible
const boton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");
boton.addEventListener("click", () => {
  const abierto = menu.classList.toggle("abierto");
  boton.setAttribute("aria-expanded", abierto);
  boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});
menu.querySelectorAll("a").forEach((enlace) =>
  enlace.addEventListener("click", () => {
    menu.classList.remove("abierto");
    boton.setAttribute("aria-expanded", "false");
  })
);

// Botones "Más información": muestran u ocultan la descripción de la tarjeta
document.querySelectorAll(".btn-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    const info = document.getElementById(btn.getAttribute("aria-controls"));
    const mostrar = info.hidden;
    info.hidden = !mostrar;
    btn.setAttribute("aria-expanded", mostrar);
    btn.textContent = mostrar ? "Ocultar información" : "Más información";
  });
});
