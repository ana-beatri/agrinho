let destruicao = 0;
let ajuda = 0;

const mensagem = document.getElementById("mensagem");
const arvores = document.getElementById("arvores");
const villagers = document.getElementById("villagers");

function iniciarJogo(){

  mensagem.innerHTML =
  "A vila está vivendo em equilíbrio. Suas escolhas irão mudar tudo.";

}

function desmatar(){

  destruicao++;

  arvores.innerHTML = "🌳 🌳";

  villagers.innerHTML = "😡 😡 😢";

  mensagem.innerHTML =
  "Você cortou árvores da floresta. Os villagers estão preocupados com a destruição da natureza.";

  verificarFinal();

}

function roubarFarm(){

  destruicao++;

  villagers.innerHTML = "😠 😠 😠";

  mensagem.innerHTML =
  "Você roubou alimentos das farms sem ajudar os villagers. A vila ficou revoltada.";

  verificarFinal();

}

function reflorestar(){

  ajuda++;

  arvores.innerHTML = "🌳 🌳 🌳 🌳 🌳 🌳 🌳";

  villagers.innerHTML = "🙂 😊 🙂";

  mensagem.innerHTML =
  "Você plantou novas árvores e ajudou a recuperar a floresta.";

  verificarFinal();

}

function ajudarVillagers(){

  ajuda++;

  villagers.innerHTML = "😀 🎁 😀";

  mensagem.innerHTML =
  "Os villagers ficaram felizes com sua ajuda e deram presentes: ⛏️ 🪓 🥕";

  verificarFinal();

}

function verificarFinal(){

  if(destruicao >= 2){

    mensagem.innerHTML =
    "Você explorou os recursos da vila sem responsabilidade. Os villagers expulsaram seu personagem da comunidade. ❌";

  }

  if(ajuda >= 2){

    mensagem.innerHTML =
    "Você trabalhou junto com os villagers, protegeu a natureza e ajudou a vila crescer. Agora todos vivem em harmonia! ✅";

  }

}