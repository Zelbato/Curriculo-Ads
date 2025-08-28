  const botoes = document.querySelectorAll(".menu-icones a");
  const secoes = document.querySelectorAll(".conteudo");

  botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
      e.preventDefault();

      // Esconde todas as seções
      secoes.forEach(secao => secao.classList.remove("ativo"));

      // Pega o ID da seção clicada
      const alvo = botao.getAttribute("data-target");
      document.getElementById(alvo).classList.add("ativo");
    });
  });

const tabs = document.querySelectorAll('.hobby-tab');
const contents = document.querySelectorAll('.hobby-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(c => {
            c.classList.remove('active');
            if(c.id === target) c.classList.add('active');
        });
    });
});