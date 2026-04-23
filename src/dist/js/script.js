const vini = [
    { id: 1, nome: "Il Superiore", desc: "Un rosso imponente e strutturato, nato dalle vigne più antiche. Note di frutti rossi maturi si intrecciano a sentori di vaniglia e tabacco, offrendo un sorso lungo, vellutato e di estrema nobiltà.", prezzo: 300 },
    { id: 2, nome: "Il Masnadiero", desc: "Audace e ribelle, questo vino colpisce per la sua intensità speziata e i richiami al sottobosco. Un corpo robusto e un tannino deciso lo rendono il compagno ideale per chi ama i sapori forti e senza compromessi.", prezzo: 250 },
    { id: 3, nome: "L'inganno", desc: "Un vino che sorprende per la sua complessità nascosta. All’apparenza delicato, rivela al palato una struttura complessa di marasca e pepe nero, lasciando un finale persistente che invita a un secondo calice.", prezzo: 200 },
    { id: 4, nome: "La Monella", desc: "Fresca, vivace e leggermente impertinente. Questo bianco sprigiona aromi floreali e di agrumi, con una spiccata acidità che pulisce il palato e regala una sensazione di immediata spensieratezza estiva.", prezzo: 160 },
    { id: 5, nome: "L'Innocente", desc: "La purezza nel calice. Un vino bianco cristallino, caratterizzato da note minerali e di frutta a polpa bianca. Elegante nella sua semplicità, è l’espressione più sincera e delicata del nostro territorio.", prezzo: 140},
    { id: 6, nome: "Il Furfante", desc: "Un violato (nostra invenzione) intrigante e giocoso, che punta tutto sulla piacevolezza. Sentori di fragolina selvatica e lampone si fondono in un sorso fresco e beverino, perfetto per aperitivi che durano fino al tramonto.", prezzo: 170}
]

const viniContenitore = document.querySelector('#cnt-vini');



vini.forEach(v => {


    viniContenitore.innerHTML += `
                 <article class="article-s">
          <div class="intestazione-card-s">
            <div class="intestazione-title-card-s">
               <h2 class="vino-titolo">Il Superiore</h2>
              <span>300€</span>
            </div>
             <p class="p-card-s vino-descrizione">
              Un rosso imponente e strutturato, nato dalle vigne più antiche.
              Note di frutti rossi maturi si intrecciano a sentori di vaniglia
              e tabacco, offrendo un sorso lungo, vellutato e di estrema
              nobiltà.
            </p>
          </div>
          <div class="container-img-s">
            <img class="vino-img"  src="./assets/img/vino-poggio-del-mosto-scuro1.png" alt="visite e degustazioni" />
          </div>
          <div class="container-btn-s">
            <button type="button" class="btn-add-carrello btn-acquista">
                Clicca per acquistare
              </button>
          </div>
        </article>
    `
});