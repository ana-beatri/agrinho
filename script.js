let pontosPositivos = 0;
let pontosNegativos = 0;

// 🎵 SONS
const somPositivo = new Audio("som-positivo.mp3");
const somNegativo = new Audio("som-negativo.mp3");

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

  somNegativo.currentTime = 0;
  somNegativo.play();

  document.getElementById("arvores").innerHTML =
    "🪵 🪵 🪵";

  document.getElementById("villagers").innerHTML =
    "😡 😢 😠";

  verificarFinal();
}

function roubarFarm() {

  pontosNegativos++;

  somNegativo.currentTime = 0;
  somNegativo.play();

  document.getElementById("farm").innerHTML =
    "🟫 🟫 🟫";

  document.getElementById("villagers").innerHTML =
    "😭 😟 😡";

  verificarFinal();
}

function reflorestar() {

  pontosPositivos++;

  somPositivo.currentTime = 0;
  somPositivo.play();

  document.getElementById("arvores").innerHTML =
    "🌳 🌳 🌳 🌳 🌳 🌳 🌳";

  document.getElementById("villagers").innerHTML =
    "😄 😊 🥰";

  verificarFinal();
}

function ajudarVillagers() {

  pontosPositivos++;

  somPositivo.currentTime = 0;
  somPositivo.play();

  document.getElementById("farm").innerHTML =
    "🌾 🌾 🌾 🌾 🌾";

  document.getElementById("villagers").innerHTML =
    "😁 🥳 😍";

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

  // mensagem dinâmica
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