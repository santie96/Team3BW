const degu = [
  {
    id: 1,
    nome: "Degustazione Riserva",
    desc: "Un'esperienza esclusiva dedicata alle nostre etichette più pregiate. Un viaggio tra vini di grande struttura ed eleganza, espressione del tempo e della cura ad ogni bottiglia.",
    prezzo: "120",
    img: "deg_riserva",
    list: [
      "Visita approfondita della cantina",
      "Degustazione di 5 vini, tra cui riserve e selezioni speciali",
      "Abbinamenti gastronomici ricercati",
      "Degustazione guidata con storytelling dedicato",
    ],
  },
  {
    id: 2,
    nome: "Degustazione Experience",
    desc: "Un'esperienza immersiva che parte dalla vigna e arriva al calice. Una passeggiata tra i filari per conoscere da vicino il ciclo della vite, seguita da una degustazione dei vini della cantina.",
    prezzo: "100",
    img: "deg_experience",
    list: [
      "Passeggiata guidata in vigneto",
      "Degustazione di 4 vini selezionati",
      "Tagliere di prodotti tipici del territorio, acqua inclusa",
      "Racconto del processo produttivo, dalla vigna alla bottiglia",
    ],
  },
  {
    id: 3,
    nome: "Degustazione Premium",
    desc: "Un'esperienza più strutturata per chi desidera approfondire il ondo del vino. Un percorso sensoriale tra etichette di maggiore complessità, guidato alla scoperta di aromi, equilibrio e carattere.",
    prezzo: "70",
    img: "deg_premium",
    list: [
      "Degustazione guidata con focus su tecniche di vinificazione",
      "Degustazione di 5 vini (inclusi vini affinati)",
      "Tagliere gourmet con selezione di salumi e formaggi, acqua inclusa",
      "Racconto do processo produttivo",
    ],
  },
  {
    id: 4,
    nome: "Degustazione Classica",
    desc: "Un percorso introduttivo pensato per scoprire l'anima della cantina. Attraverso una selezione dei nostri vini più rappresentativi, questa esperienza racconta il territorio, le tradizioni e la nostra filosofia produttiva.",
    prezzo: "50",
    img: "deg_classica",
    list: [
      "Introduzione alla cantina e ai metodi di produção",
      "Degustazione di 3 vini selezionati",
      "Tagliere di prodotti tipici locali, acqua inclusa",
      "Racconto do processo produttivo",
    ],
  },
];

const deguContenitore = document.querySelector("#cnt-degu");
let qntd = 1;

// Renderização dos cards
degu.forEach((d) => {
  deguContenitore.innerHTML += `
  <div class="card-deg">
      <div class="cnt-intestation-card-deg">
        <h2 class="m-0">${d.nome}</h2>
        <span class="m-0">€ ${d.prezzo}</span> 
      </div>
      <div class="cnt-img-card-deg">
        <img src="./assets/img/${d.img}.webp" alt="${d.nome}" /> 
      </div>
      <div class="cnt-description-card-deg">
        <p class="m-0">${d.desc}</p>
      </div>
      <div class="cnt-button-card-deg">
        <button type="button" class="btn-add-carrello btn-acquista" data-id="${d.id}">
                Scopri di piu
        </button>
      </div>
    </div>
  `;
});

// Lógica do Clique e Modal
deguContenitore.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-acquista");
  if (!btn) return;

  // Pegamos o ID do botão e achamos o objeto completo no array original
  const idSelecionado = parseInt(btn.dataset.id);
  const itemfocado = degu.find((item) => item.id === idSelecionado);

  if (itemfocado) {
    // Preenchendo a lista do modal usando o objeto encontrado
    document.querySelector("#modal-pccli-destino").textContent = itemfocado.list[0];
    document.querySelector("#modal-sccli-destino").textContent = itemfocado.list[1];
    document.querySelector("#modal-tccli-destino").textContent = itemfocado.list[2];
    document.querySelector("#modal-qccli-destino").textContent = itemfocado.list[3];

    // Preenchendo os outros campos
    document.querySelector("#modal-titulo-destino").textContent = itemfocado.nome;
    document.querySelector("#modal-lip-destino").textContent = itemfocado.desc;
    document.querySelector("#modal-img-destino").src = `./assets/img/${itemfocado.img}.webp`;

    // Abrindo o Modal
    const modalElement = document.querySelector("#modalAcquistodegu");
    bootstrap.Modal.getOrCreateInstance(modalElement).show();
  }
});

// Reset do contador ao abrir
document.querySelector("#modalAcquistodegu").addEventListener("show.bs.modal", () => {
  qntd = 1;
  document.querySelector("#contador-d").textContent = qntd;
});

// Funções de incremento e decremento
document.querySelector("#btn-incrementa-d").addEventListener("click", () => {
  qntd++;
  document.querySelector("#contador-d").textContent = qntd;
});

document.querySelector("#btn-decrementa-d").addEventListener("click", () => {
  if (qntd > 1) {
    qntd--;
    document.querySelector("#contador-d").textContent = qntd;
  }
});