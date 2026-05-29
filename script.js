const somPositivo = new Audio("https://www.myinstants.com/media/sounds/mario-coin.mp3");
const somNegativo = new Audio("https://www.myinstants.com/media/sounds/error.mp3");
let pontosPositivos = 0;
let pontosNegativos = 0;

function iniciarJogo() {

  pontosPositivos = 0;
  pontosNegativos = 0;

  document.getElementById("arvores").innerHTML =
    "🌳 🌳 🌳 🌳 🌳";

  document.getElementById("farm").innerHTML =
    "🌾 🌾 🌾 🌾 🌾";

  document.getElementById("villagers").innerHTML =
    "🙂 🙂 🙂";

  document.getElementById("mensagem").innerHTML =
    "Faça sua escolha...";

  document.getElementById("final").style.display =
    "none";
}

function desmatar() {

  pontosNegativos++;

  document.getElementById("arvores").innerHTML =
    "🪵 🪵 🪵";

  document.getElementById("villagers").innerHTML =
    "😡 😢 😠";

  verificarFinal();
}

function roubarFarm() {

  pontosNegativos++;

  document.getElementById("farm").innerHTML =
    "🟫 🟫 🟫";

  document.getElementById("villagers").innerHTML =
    "😭 😟 😡";

  verificarFinal();
}

function reflorestar() {

  pontosPositivos++;

  document.getElementById("arvores").innerHTML =
    "🌳 🌳 🌳 🌳 🌳 🌳 🌳";

  document.getElementById("villagers").innerHTML =
    "😄 😊 🥰";

  verificarFinal();
}

function ajudarVillagers() {

  pontosPositivos++;

  document.getElementById("villagers").innerHTML =
    "😁 🥳 😍";

  document.getElementById("farm").innerHTML =
    "🌾 🌾 🌾 🌾 🌾";

  verificarFinal();
}

function verificarFinal() {

  if (pontosPositivos >= 2) {

    document.getElementById("mensagem").innerHTML =
      "Parabéns! Você salvou a vila! 🌱✨";

    document.getElementById("final").style.display = "block";
    return;
  }

  if (pontosNegativos >= 2) {

    document.getElementById("mensagem").innerHTML =
      "A vila entrou em colapso ambiental! 🌍💀";

    document.getElementById("final").style.display = "block";
    return;
  }

  // 🔥 MENSAGEM DINÂMICA (resolve seu problema)
  const mensagem = document.getElementById("mensagem");

  if (pontosPositivos > pontosNegativos) {
    mensagem.innerHTML = "A vila está evoluindo positivamente! 🌿😊";
  } 
  else if (pontosNegativos > pontosPositivos) {
    mensagem.innerHTML = "A vila está sofrendo impactos negativos! ⚠️";
  } 
  else {
    mensagem.innerHTML = "O equilíbrio ainda pode ser restaurado ⚖️";
  }
}