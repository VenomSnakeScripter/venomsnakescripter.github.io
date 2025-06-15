// script.js

const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");

sobre.addEventListener("click", () => {
  // Animación para abrir el sobre
  sobre.style.transform = "scale(0.5) rotateX(180deg)";
  sobre.style.opacity = "0";
  
  // Mostrar la carta con animación
  setTimeout(() => {
    carta.style.display = "block";
    carta.style.transform = "translateY(0)";
    carta.style.opacity = "1";
  }, 500); // Retraso para asegurar que el sobre se haya "cerrado" antes
});
