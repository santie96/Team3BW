let quantidade = 1;

function abrirModalVinho() {
  // 1. Captura os elementos do Card original
  const tituloOrigem = document.getElementById("titulo").innerText;
  const imagemOrigem = document.getElementById("imagem").src;

  const espporirigem = document.getElementById("pesp").innerText;
  const espsoririgem = document.getElementById("sesp").innerText;
  const esptoririgem = document.getElementById("tesp").innerText;
  const espqoririgem = document.getElementById("qesp").innerText;
  const preoririgem = document.getElementById("preco").innerText;
  const duroririgem = document.getElementById("duracao").innerText;

  // 2. Preenche os elementos dentro do Modal
  document.getElementById("modal-titulo-destino").innerText = tituloOrigem;
  document.getElementById("modal-img-destino").src = imagemOrigem;

  document.getElementById("modal-lip-destino").innerText = espporirigem;
  document.getElementById("modal-lis-destino").innerText = espsoririgem;
  document.getElementById("modal-lit-destino").innerText = esptoririgem;
  document.getElementById("modal-liq-destino").innerText = espqoririgem;
  document.getElementById("modal-divpreco-destino").innerText = preoririgem;
  document.getElementById("modal-divduracao-destino").innerText = duroririgem;

  // 3. Reseta o contador sempre que abrir o modal
  quantidade = 1;
  document.getElementById("contador-qtd").innerText = quantidade;

  // 4. Dispara o Modal do Bootstrap (via JS)
  var myModal = new bootstrap.Modal(
    document.getElementById("modalExperiencia"),
  );
  myModal.show();
}

function incrementar() {
  quantidade++;
  document.getElementById("contador-qtd").innerText = quantidade;
}
