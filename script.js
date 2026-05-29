let vida = 100;

// 🌱 iniciar
function iniciarJogo() {

  vida = 100;
  atualizarVida();

  document.getElementById("arvores").innerHTML = "🌳 🌳 🌳 🌳 🌳";
  document.getElementById("farm").innerHTML = "🌾 🌾 🌾 🌾 🌾";
  document.getElementById("villagers").innerHTML = "🙂 🙂 🙂";
  document.getElementById("mensagem").innerHTML = "Faça sua escolha...";
}

function desmatar() {

  vida -= 10;

  animar("arvores", "animar-negativo");

  document.getElementById("arvores").innerHTML =
    "🪵 🪵 🪵";

  document.getElementById("villagers").innerHTML =
    "😡 😠 😤";

  atualizarTudo();
}

/function roubarFarm() {

  vida -= 10;

  animar("farm", "animar-negativo");

  document.getElementById("farm").innerHTML =
    "🟫 🪵 🟫";

  document.getElementById("villagers").innerHTML =
    "😭 😢 😞";

  atualizarTudo();
}

function reflorestar() {

  vida += 10;

  animar("arvores", "animar-positivo");

  document.getElementById("arvores").innerHTML =
    "🌳 🌳 🌳 🌳 🌳 🌳 🌳";

  document.getElementById("villagers").innerHTML =
    "😄 😊 🥰";

  atualizarTudo();
}

function ajudarVillagers() {

  vida += 10;

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
  el.classList.add(classe);

  setTimeout(() => {
    el.classList.remove(classe);
  }, 500);
}

// ❤️ barra de vida
function atualizarVida() {

  const barra = document.getElementById("barraVida");

  barra.style.width = vida + "%";

  if (vida > 70) barra.style.background = "#4caf50";
  else if (vida > 40) barra.style.background = "#ffeb3b";
  else barra.style.background = "#f44336";
}

// 🔄 lógica principal
function atualizarTudo() {

  atualizarVida();
  verificarFase();
}

// 🌍 fases
function verificarFase() {

  const msg = document.getElementById("mensagem");

  if (vida >= 70) {
    msg.innerHTML = "🌿 Fase: Harmonia Ambiental";
  } 
  else if (vida >= 40) {
    msg.innerHTML = "⚠️ Fase: Atenção Ambiental";
  } 
  else {
    msg.innerHTML = "💀 Fase: Colapso Ambiental";
  }
}