let vida = 100;

// 🌱 iniciar
function iniciarJogo() {

  vida = 100;
  atualizarVida();

  document.getElementById("arvores").innerHTML = "🌳 🌳 🌳 🌳 🌳";
  document.getElementById("farm").innerHTML = "🌾 🌾 🌾 🌾 🌾";
  document.getElementById("villagers").innerHTML = "🙂 🙂 🙂";
  document.getElementById("mensagem").innerHTML = "Faça sua escolha...";

  mostrarTextoAgrinho(); // ✨ Adicionado: mostrar texto do Agrinho
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

// 🙂 ajudar
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
  if (!msg) return;

  if (vida >= 60) {
    msg.innerHTML = "🌿 Fase: Harmonia Ambiental";
  } 
  else if (vida >= 50) {
    msg.innerHTML = "⚠️ Fase: Atenção Ambiental";
  } 
  else {
    msg.innerHTML = "💀 Fase: Colapso Ambiental";
  }
}

// 📜 novo: mostrar texto educativo do Agrinho
function mostrarTextoAgrinho() {
  const texto = `
O desmatamento é uma das maiores ameaças ao meio ambiente,
destruindo florestas, ameaçando a biodiversidade e contribuindo
para as mudanças climáticas. Cada árvore preservada ajuda a manter
o equilíbrio da natureza e garante recursos essenciais para as
próximas gerações.
  `;
  const container = document.getElementById("agrinho-texto");
  if (!container) return;
  container.innerText = texto;
}