let vida = 100;

// 🌱 iniciar
function iniciarJogo() {

  vida = 100;
  atualizarVida();

  document.getElementById("arvores").innerHTML = "🌳 🌳 🌳 🌳 🌳";
  document.getElementById("farm").innerHTML = "🌾 🌾 🌾 🌾 🌾";
  document.getElementById("villagers").innerHTML = "🙂 🙂 🙂";
  document.getElementById("mensagem").innerHTML = "Faça sua escolha...";
  document.getElementById("agrinho-texto").innerHTML = "";
}

// 🪵 desmatar
function desmatar() {

  vida -= 30;

  animar("arvores", "animar-negativo");

  document.getElementById("arvores").innerHTML =
    "🪵 🪵 🪵";

  document.getElementById("villagers").innerHTML =
    "😡 😠 😤";

  atualizarTudo();
}

// 🌾 roubar farm
function roubarFarm() {

  vida -= 20;

  animar("farm", "animar-negativo");

  document.getElementById("farm").innerHTML =
    "🟫 🟫 🟫";

  document.getElementById("villagers").innerHTML =
    "😭 😢 😞";

  atualizarTudo();
}

// 🌳 reflorestar
function reflorestar() {

  vida += 30;

  animar("arvores", "animar-positivo");

  document.getElementById("arvores").innerHTML =
    "🌳 🌳 🌳 🌳 🌳 🌳 🌳";

  document.getElementById("villagers").innerHTML =
    "😄 😊 🥰";

  atualizarTudo();
}

// 🙂 ajudar villagers
function ajudarVillagers() {

  vida += 45;

  animar("villagers", "animar-positivo");

  document.getElementById("farm").innerHTML =
    "🌾 🌾 🌾 🌾 🌾";

  document.getElementById("villagers").innerHTML =
    "😁 🥳 😍";

  atualizarTudo();
}

// 🎯 animação
function animar(id, classe) {

  const el = document.getElementById(id);
  if (!el) return;

  el.classList.add(classe);

  setTimeout(() => {
    el.classList.remove(classe);
  }, 500);
}

// ❤️ barra de vida
function atualizarVida() {

  const barra = document.getElementById("barraVida");
  if (!barra) return;

  barra.style.width = vida + "%";

  if (vida > 70) {
    barra.style.background = "#4caf50";
  } else if (vida > 40) {
    barra.style.background = "#ffeb3b";
  } else {
    barra.style.background = "#f44336";
  }
}

// 🔄 atualizar
function atualizarTudo() {
  atualizarVida();
  verificarFase();
}

// 🌍 fases e finais
function verificarFase() {

  const msg = document.getElementById("mensagem");
  if (!msg) return;

  if (vida >= 150) {

    msg.innerHTML =
      "🏆 FINAL FELIZ: A vila prosperou com sustentabilidade!";

    mostrarTextoAgrinho(
      "Parabéns! Você mostrou que reflorestar, preservar a natureza e ajudar a comunidade são atitudes fundamentais para um futuro melhor. A união entre as pessoas e o respeito ao meio ambiente garantem qualidade de vida para todos."
    );

  }
  else if (vida >= 60) {

    msg.innerHTML = "🌿 Fase: Harmonia Ambiental";

  }
  else if (vida >= 50) {

    msg.innerHTML = "⚠️ Fase: Atenção Ambiental";

  }
  else {

    msg.innerHTML =
      "💀 FINAL RUIM: Colapso Ambiental";

    mostrarTextoAgrinho(
      "O desmatamento e a exploração excessiva dos recursos naturais causaram sérios impactos ambientais. Preservar as florestas, reflorestar áreas degradadas e agir com responsabilidade são atitudes essenciais para proteger o planeta e as futuras gerações."
    );
  }
}

// 📜 texto final
function mostrarTextoAgrinho(texto) {

  const container = document.getElementById("agrinho-texto");
  if (!container) return;

  container.innerText = texto;
}

// carregar barra de vida
window.onload = function () {
  atualizarVida();
};