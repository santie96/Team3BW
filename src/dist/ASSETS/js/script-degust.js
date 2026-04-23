(function () {
  // Estado do contador e vino corrente
  let quantitaCorrente = 1;
  let vinoSelezionato = null;
  let modalInstance = null;

  // Elementos DOM
  const modalElement = document.getElementById("modalAcquistoVino");
  const modalTitolo = document.getElementById("modal-titulo-destino");
  const modalImg = document.getElementById("modal-img-destino");
  const modalDesc = document.getElementById("modal-lip-destino");
  const contatoreSpan = document.getElementById("contador-qtd");
  const btnDecrementa = document.getElementById("btn-decrementa");
  const btnIncrementa = document.getElementById("btn-incrementa");
  const formOrdine = document.getElementById("form-ordine-vino");

  // Função para atualizar contador visualizado
  function aggiornaContatore() {
    if (contatoreSpan) contatoreSpan.innerText = quantitaCorrente;
  }

  function incrementa() {
    quantitaCorrente++;
    aggiornaContatore();
  }

  function decrementa() {
    if (quantitaCorrente > 1) {
      quantitaCorrente--;
      aggiornaContatore();
    }
  }

  // Reseta o modal e contador
  function resetModal() {
    quantitaCorrente = 1;
    aggiornaContatore();
    if (modalTitolo) modalTitolo.innerText = "";
    if (modalImg) modalImg.src = "";
    if (modalDesc) modalDesc.innerText = "";
    vinoSelezionato = null;
    // Reset dos campos do formulário
    if (formOrdine) {
      const nomeInput = document.getElementById("nomeCliente");
      const emailInput = document.getElementById("emailCliente");
      const msgInput = document.getElementById("messaggioCliente");
      if (nomeInput) nomeInput.value = "";
      if (emailInput) emailInput.value = "";
      if (msgInput) msgInput.value = "";
    }
  }

  // Função para abrir o modal (acessível globalmente)
  window.abrirModalVinho = function (botaoElement) {
    // Encontra o card pai (o card-deg que contém o botão)
    const cardDeg = botaoElement.closest(".card-deg");
    if (!cardDeg) return;

    // Extrai os dados do card
    const tituloElement = cardDeg.querySelector(".cnt-intestation-card-deg h2");
    const precoElement = cardDeg.querySelector(
      ".cnt-intestation-card-deg span",
    );
    const descricaoElement = cardDeg.querySelector(
      ".cnt-description-card-deg > h2",
    );
    const imagemElement = cardDeg.querySelector(".cnt-img-card-deg img");

    // Pega também a lista de itens da degustação
    const itensLista = cardDeg.querySelectorAll(".cnt-text-card-deg ul li p");
    let itensDescricao = "";
    itensLista.forEach((item) => {
      itensDescricao += item.innerText + "\n";
    });

    let nomeVino = tituloElement ? tituloElement.innerText : "Degustazione";
    let descVino = descricaoElement ? descricaoElement.innerText : "";
    let imgSrc = imagemElement ? imagemElement.src : "./assets/img/logo.png";
    let preco = precoElement ? precoElement.innerText : "";

    // Adiciona informações dos itens e preço à descrição
    const descCompleta = `${itensDescricao}`;
    // const descCompleta = `${descVino}\n\nPrezzo: ${preco}\n\nInclude:\n${itensDescricao}`;

    const vinoObj = {
      nome: nomeVino,
      desc: descCompleta,
      img: imgSrc,
      preco: preco,
    };

    // Abre o modal com os dados
    if (!vinoObj) return;
    resetModal();
    vinoSelezionato = vinoObj;
    if (modalTitolo) modalTitolo.innerText = vinoObj.nome;
    if (modalImg) modalImg.src = vinoObj.img;
    if (modalDesc) modalDesc.innerText = vinoObj.desc;

    // Inicializa ou reutiliza a instância do modal
    if (!modalInstance) {
      modalInstance = new bootstrap.Modal(modalElement, {
        backdrop: "static",
        keyboard: true,
      });
    }
    modalInstance.show();
  };

  // Eventos para os botões + e -
  if (btnIncrementa) btnIncrementa.addEventListener("click", incrementa);
  if (btnDecrementa) btnDecrementa.addEventListener("click", decrementa);

  // Também suporta a seleção por classe alternativa
  const pulsantiAcquista = document.querySelectorAll(".btn-add-carrello");
  pulsantiAcquista.forEach((pulsante) => {
    // Remove qualquer onclick existente para evitar duplicação
    pulsante.removeAttribute("onclick");
    pulsante.addEventListener("click", function (event) {
      window.abrirModalVinho(this);
    });
  });

  console.log("Degustazioni inizializzate correttamente");
})();
