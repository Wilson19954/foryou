const botao = document.getElementById("botao");
let contador = 0; // contador de vezes que passou o mouse
const limite = 5; // máximo de fugas
let liberado = false; // controla se já pode redirecionar

botao.addEventListener("mouseover", () => {
  if (contador >= limite) {
    botao.textContent = "Ok, ok ja que você quer taaaanto";
    liberado = true; // agora pode abrir o YouTube no clique
    return; // não foge mais
  }

  contador++;

  botao.classList.add("hidden");

  setTimeout(() => {
    const x = Math.random() * (document.body.scrollWidth - botao.offsetWidth);
    const y = Math.random() * (document.body.scrollHeight - botao.offsetHeight);

    botao.style.left = `${x}px`;
    botao.style.top = `${y}px`;

    botao.classList.remove("hidden");

    // Move a tela até o botão
    botao.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }, 500);
});

// Agora o clique abre o YouTube em nova guia
botao.addEventListener("click", () => {
  if (liberado) {
    window.open("https://youtu.be/bn5m8ZF0B_E", "_blank");
  }

});

