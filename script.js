let abierto = false;

function abrirCarta() {
  if (!abierto) {
    document.getElementById("sobre-img").src = "sobre-abierto.png";
    document.getElementById("sobre-container").style.display = "none";
    document.getElementById("carta").classList.remove("hidden");
    document.getElementById("flor").classList.remove("hidden");
    abierto = true;
  }
}

function mostrarDecision() {
  document.getElementById("carta").classList.add("hidden");
  document.getElementById("decision").classList.remove("hidden");
}

function mostrarGracias() {
  document.getElementById("decision").classList.add("hidden");
  document.getElementById("agradecimiento").classList.remove("hidden");
  document.getElementById("flor").classList.remove("hidden");
}

function moverBoton(boton) {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  boton.style.transform = `translate(${x}px, ${y}px)`;
}
