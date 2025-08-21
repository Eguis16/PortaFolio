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

  let Ultima_Frase = '';

  function FraseAleatoria() {
    let Nueva_Frase;
    do {
      Nueva_Frase = frases[Math.floor(Math.random() * frases.length)];
    } while (Nueva_Frase === Ultima_Frase);
    Ultima_Frase = Nueva_Frase;
    return Nueva_Frase;
  }

  function escribirTexto(texto) {
    contenedor.textContent = '';
    let i = 0;
    const velocidad = 50; // velocidad de escritura

    function escribir() {
      if (i < texto.length) {
        contenedor.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, velocidad);
      }
    }

    escribir();
  }

  function Update() {
    contenedor.style.opacity = 0;
    setTimeout(() => {
      const frase = FraseAleatoria();
      escribirTexto(frase);
      contenedor.style.opacity = 1;
    }, 500);
  }

  Update();
  setInterval(Update, 7000); // cambia cada 7 segundos
}

Frases();
