let pontosPositivos = 0;
let pontosNegativos = 0;

function iniciarJogo() {

  // Resetar pontos
  pontosPositivos = 0;
  pontosNegativos = 0;

  // Resetar emojis
  document.getElementById("arvores").innerHTML =
    "🌳 🌳 🌳 🌳 🌳";

  document.getElementById("villagers").innerHTML =
    "🙂 🙂 🙂";

  // Resetar mensagem
  document.getElementById("mensagem").innerHTML =
    "Faça sua escolha...";

  // Esconder reflexão final
  document.getElementById("final").style.display =
    "none";
}

function desmatar() {

  pontosNegativos++;

  document.getElementById("arvores").innerHTML =
    "🪵 🪵 🪵";

  document.getElementById("mensagem").innerHTML =
    "As florestas estão desaparecendo!";

  verificarFinal();
}

function roubarFarm() {

  pontosNegativos++;

  document.getElementById("villagers").innerHTML =
    "😡 😢";

  document.getElementById("mensagem").innerHTML =
    "Os villagers perderam alimento!";

  verificarFinal();
}

function reflorestar() {

  pontosPositivos++;

  document.getElementById("arvores").innerHTML =
    "🌳 🌳 🌳 🌳 🌳 🌳 🌳";

  document.getElementById("mensagem").innerHTML =
    "A natureza está se recuperando!";

  verificarFinal();
}

function ajudarVillagers() {

  pontosPositivos++;

  document.getElementById("villagers").innerHTML =
    "😄 🥰 😄";

  document.getElementById("mensagem").innerHTML =
    "Os villagers estão felizes!";

  verificarFinal();
}

function verificarFinal() {

  // Só mostra o final quando atingir 2 ações positivas
  if (pontosPositivos >= 2) {

    document.getElementById("mensagem").innerHTML =
      "Parabéns! Você salvou a vila!";

    document.getElementById("final").style.display =
      "block";
  }

  // Final ruim
  if (pontosNegativos >= 2) {

    document.getElementById("mensagem").innerHTML =
      "A vila entrou em colapso ambiental!";

    document.getElementById("final").style.display =
      "block";
  }
}