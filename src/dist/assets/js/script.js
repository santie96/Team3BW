(function () {
  // Stato del contatore e vino corrente
  let quantitaCorrente = 1;
  let vinoSelezionato = null;
  let modalInstance = null;

  // Elementi DOM
  const modalElement = document.getElementById("modalAcquistoVino");
  const modalTitolo = document.getElementById("modal-titulo-destino");
  const modalImg = document.getElementById("modal-img-destino");
  const modalDesc = document.getElementById("modal-lip-destino");
  const contatoreSpan = document.getElementById("contador-qtd");
  const btnDecrementa = document.getElementById("btn-decrementa");
  const btnIncrementa = document.getElementById("btn-incrementa");
  const formOrdine = document.getElementById("form-ordine-vino");

  // Funzione per aggiornare contatore visualizzato
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

  // Resetta il modal e contatore
  function resetModal() {
    quantitaCorrente = 1;
    aggiornaContatore();
    if (modalTitolo) modalTitolo.innerText = "";
    if (modalImg) modalImg.src = "";
    if (modalDesc) modalDesc.innerText = "";
    vinoSelezionato = null;
    // Reset fields form
    if (formOrdine) {
      const nomeInput = document.getElementById("nomeCliente");
      const emailInput = document.getElementById("emailCliente");
      const msgInput = document.getElementById("messaggioCliente");
      if (nomeInput) nomeInput.value = "";
      if (emailInput) emailInput.value = "";
      if (msgInput) msgInput.value = "";
    }
  }

  // Apre il modale con i dati del vino
  window.apriModalVino = function (vinoData) {
    if (!vinoData) return;
    resetModal();
    vinoSelezionato = vinoData;
    if (modalTitolo) modalTitolo.innerText = vinoData.nome;
    if (modalImg) modalImg.src = vinoData.img;
    if (modalDesc) modalDesc.innerText = vinoData.desc;

    // Inizializza o riutilizza l'istanza del modal
    if (!modalInstance) {
      modalInstance = new bootstrap.Modal(modalElement, {
        backdrop: "static",
        keyboard: true,
      });
    }
    modalInstance.show();
  };

  // Eventi per pulsanti + e -
  if (btnIncrementa) btnIncrementa.addEventListener("click", incrementa);
  if (btnDecrementa) btnDecrementa.addEventListener("click", decrementa);

  // Collega i bottoni "Clicca per acquistare" di ogni card
  const pulsantiAcquista = document.querySelectorAll(".btn-acquista");
  pulsantiAcquista.forEach((pulsante, idx) => {
    pulsante.addEventListener("click", function (event) {
      const articleCard = this.closest(".article-s");
      if (!articleCard) return;

      // Recupera titolo, descrizione e immagine dal card corrente
      const titoloElem = articleCard.querySelector(".vino-titolo");
      const descElem = articleCard.querySelector(".vino-descrizione");
      const imgElem = articleCard.querySelector(".vino-img");

      let nomeVino = titoloElem ? titoloElem.innerText : "Vino";
      let descVino = descElem
        ? descElem.innerText
        : "Delizioso vino della cantina.";
      let imgSrc = imgElem ? imgElem.src : "./assets/img/logo.png";

      const vinoObj = {
        nome: nomeVino,
        desc: descVino,
        img: imgSrc,
      };

      apriModalVino(vinoObj);
    });
  });

  // Se ci sono id duplicati? Nessun problema — ora è robusto.
  console.log("Catalogo vini inizializzato correttamente");
})();
