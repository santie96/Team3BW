const even = [
  {
    id: 1,
    nome: "Matrimoni",
    desc: "Dì il tuo 'Sì' immerso nella bellezza senza tempo della nostra tenuta. Spazi eleganti, panorami mozzafiato e un servizio impeccabile per rendere il vostro giorno più bello un evento da favola, incorniciato dalla nobiltà della vigna.",
    prezzo: "Prezzo su richiesta",
    img: "matrimoni",
  },
  {
    id: 2,
    nome: "Yoga e Vinoterapia",
    desc: "Ritrova l'equilibrio tra corpo e mente con una sessione di yoga al risveglio tra le vigne. Un'esperienza di benessere totale che si conclude con una degustazione meditativa, per nutrire lo spirito e il palato.",
    prezzo: "65",
    img: "yoga",
  },
  {
    id: 3,
    nome: "Wine Relaxing Spa",
    desc: "Il benessere nasce dall'uva. Immergetevi in trattamenti esclusivi a base di vinoterapia: bagni nei polifenoli e massaggi con estratti di vinaccioli per rigenerare pelle e sensi nel cuore della nostra tenuta.",
    prezzo: "150",
    img: "wine_spa",
  },
  {
    id: 4,
    nome: "Masterclass Sommelier",
    desc: "Un viaggio tecnico e sensoriale per veri appassionati. Approfondite la conoscenza dei vitigni e delle tecniche di affinamento guidati da un Sommelier esperto. Un'occasione unica per imparare a leggere ogni sfumatura nel calice.",
    prezzo: "100",
    img: "sommelier_masterclass",
  },
  {
    id: 5,
    nome: "Masterclass Chef",
    desc: "Mettiti alla prova in cucina guidato da uno chef professionista. Impara a tirare la sfoglia e a creare i piatti della tradizione toscana, scoprendo come ogni ingrediente trovi il suo compagno ideale nei nostri vini. Un'esperienza pratica, divertente e saporita.",
    prezzo: "140",
    img: "chef_masterclass",
  },
  {
    id: 6,
    nome: "Aperitivi al tramonto",
    desc: "Quando il sole bacia le colline, è il momento di brindare. Un calice di vino fresco, musica soffusa e la magia della 'Golden Hour' tra i vigneti. L'appuntamento più romantico e suggestivo della giornata.",
    prezzo: "45",
    img: "aperitivi",
  },
  {
    id: 7,
    nome: "Cena con Delitto",
    desc: "Un mistero da risolvere tra le ombre della nostra barricaia. Una cena teatrale dove il sospetto corre tra i calici e ogni indizio è fondamentale. Riuscirete a scoprire il colpevole tra un sorso di Riserva e l'altro?",
    prezzo: "85",
    img: "cena_con_delitto",
  },
  {
    id: 8,
    nome: "Cinema all'aperto",
    desc: "Sotto un cielo di stelle, tra i filari silenziosi, proiettiamo i grandi classici. Un calice in mano, poltrone confortevoli e un'atmosfera magica per una serata che unisce la settima arte alla cultura del vino.",
    prezzo: "55",
    img: "cinema",
  },
  {
    id: 9,
    nome: "Picnic tra le viti",
    desc: "Un rosso imponente e strutturato, nato dalle vigne più antiche. Note di frutti rossi maturi si intrecciano a sentori di vaniglia e tabacco, offrendo un sorso lungo, vellutato e di estrema nobiltà.",
    prezzo: "65",
    img: "picnic",
  },
];

const evenContenitore = document.querySelector("#cnt-even");
let qnte = 1;

even.forEach((e) => {
  evenContenitore.innerHTML += `

    <article class="article-e">
      <div class="intestazione-card-e">
        <div class="intestazione-title-card-e">
          <h2 id="titulo">${e.nome}</h2>
          <span>${e.prezzo}€</span>
        </div>
        <p id="pesp" class="p-card-e">
          ${e.desc}
        </p>
      </div>
      <div class="container-img-e">
        <img id="imagem" src="./assets/img/${e.img}.webp" alt="${e.nome}" />
      </div>
      <div class="container-btn-e">
      <button type="button" class="btn-add-carrello btn-acquista"
            data-id="${e.id}"
            data-nome="${e.nome}"
            data-desc="${e.desc}"
            data-img="./assets/img/${e.img}.webp"
            >
                Scopri di piu
              </button>
    </article>`;
});

evenContenitore.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-acquista");
  if (!btn) return;

  document.querySelector("#modal-titulo-destino").textContent =
    btn.dataset.nome;
  document.querySelector("#modal-lip-destino").textContent = btn.dataset.desc;
  document.querySelector("#modal-img-destino").src = btn.dataset.img;

  bootstrap.Modal.getOrCreateInstance(
    document.querySelector("#modalAcquistoeven"),
  ).show();
});
document
  .querySelector("#modalAcquistoeven")
  .addEventListener("show.bs.modal", () => {
    document.querySelector("#contador-e").textContent = 1;
  });

document.querySelector("#btn-incrementa-e").addEventListener("click", () => {
  qnte++;
  document.querySelector("#contador-e").textContent = qnte;
});

document.querySelector("#btn-decrementa-e").addEventListener("click", () => {
  if (qnte > 1) {
    qnte--;
    document.querySelector("#contador-e").textContent = qnte;
  }
});
