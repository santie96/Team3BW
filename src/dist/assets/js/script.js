let quantidade = 1;

function abrirModalVinho() {
  // 1. Captura os elementos do Card original
  const tituloOrigem = document.getElementById("titulo").innerText;
  const imagemOrigem = document.getElementById("imagem").src;

  const espporirigem = document.getElementById("pesp").innerText;

  // 2. Preenche os elementos dentro do Modal
  document.getElementById("modal-titulo-destino").innerText = tituloOrigem;
  document.getElementById("modal-img-destino").src = imagemOrigem;

  document.getElementById("modal-lip-destino").innerText = espporirigem;

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

function decrementar() {
  quantidade;
  if (quantidade > 1) {
    quantidade--;
    document.getElementById("contador-qtd").innerText = quantidade;
  }
}
function limparModalVinho() {
  quantidade = 1;

  document.getElementById("modal-titulo-destino").innerText = "";
  document.getElementById("modal-img-destino").src = "";
  document.getElementById("modal-lip-destino").innerText = "";

  const contadorElement = document.getElementById("contador-qtd");
  if (contadorElement) {
    contadorElement.innerText = quantidade;
  }
}
