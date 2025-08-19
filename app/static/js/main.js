function Frases() {
  const frases = [
    "Cree en ti y todo será posible.",
    "Cada día es una nueva oportunidad para mejorar.",
    "No tienes que ser grande para empezar, pero tienes que empezar para ser grande.",
    "El éxito es la suma de pequeños esfuerzos repetidos cada día.",
    "Hazlo con pasión o no lo hagas.",
    "La disciplina tarde o temprano vencerá a la inteligencia.",
    "No te rindas, lo mejor está por venir."
  ];

  const contenedor = document.getElementById('frases');
  if (!contenedor) return;

  function Update() {
    contenedor.textContent = frases[Math.floor(Math.random() * frases.length)];
  }

  Update(); // Mostrar una frase al cargar
  setInterval(Update, 10000); // Cambiar cada 10 segundos
}

document.addEventListener('DOMContentLoaded', Frases);
