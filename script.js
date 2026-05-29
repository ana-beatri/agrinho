let pontosPositivos = 0;
let pontosNegativos = 0;

function iniciarJogo() {

  pontosPositivos = 0;
  pontosNegativos = 0;

  // Resetar árvores
  document.getElementById("arvores").innerHTML =
    "🌳 🌳 🌳 🌳 🌳";

  // Resetar farm
  document.getElementById("farm").innerHTML =
    "🌾 🌾 🌾 🌾 🌾";

  // Resetar villagers
  document.getElementById("villagers").innerHTML =
    "🙂 🙂 🙂";

  // Resetar mensagem
  document.getElementById("mensagem").innerHTML =
    "Faça sua escolha...";

  // Esconder final
  document.getElementById("final").style.display =
    "none";
}

function desmatar() {

  pontosNegativos++;

  document.getElementById("arvores").innerHTML =
    "🪵 🪵 🪵";

  document.getElementById("villagers").innerHTML =
    "😡 😢 😠";

  document.getElementById("mensagem").innerHTML =
    "Os villagers estão revoltados com o desmatamento!";

  verificarFinal();
}

function roubarFarm() {

  pontosNegativos++;

  const farm = document.getElementById("farm");

  if (farm) {
    farm.innerHTML = "🟫 🟫 🟫";
  }

  document.getElementById("villagers").innerHTML =
    "😭 😟 😡";

  document.getElementById("mensagem").innerHTML =
    "Os villagers perderam seus alimentos!";

  verificarFinal();
}

function reflorestar() {

  pontosPositivos++;

  document.getElementById("arvores").innerHTML =
    "🌳 🌳 🌳 🌳 🌳 🌳 🌳";

  document.getElementById("villagers").innerHTML =
    "😄 😊 🥰";

  document.getElementById("mensagem").innerHTML =
    "Os villagers comemoram o reflorestamento!";

  verificarFinal();
}

function ajudarVillagers() {

  pontosPositivos++;

  document.getElementById("villagers").innerHTML =
    "😁 🥳 😍";

  document.getElementById("mensagem").innerHTML =
    "Os villagers agradecem sua ajuda!";

  verificarFinal();
}

function verificarFinal() {

  if (pontosPositivos >= 2) {

    document.getElementById("mensagem").innerHTML =
      "Parabéns! Você salvou a vila!";

    document.getElementById("final").style.display =
      "block";
  }

  if (pontosNegativos >= 2) {

    document.getElementById("mensagem").innerHTML =
      "A vila entrou em colapso ambiental!";

    document.getElementById("final").style.display =
      "block";
  }
}