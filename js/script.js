// ativar o underline no menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ativar itens do orcamento;

const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  console.log(elemento);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes

const botao = document.querySelectorAll(".seguros-perguntas button");

function pergunta(respas) {
  const pergunta = respas.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const respostas = document.getElementById(controls);
  respostas.classList.toggle("ativa");
  const ativa = respostas.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(perguntas) {
  perguntas.addEventListener("click", pergunta);
}

botao.forEach(eventosPerguntas);

// galeria bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function fotoPrincipal(event) {
  const img = event.currentTarget;
  if (matchMedia("(min-width: 1000px)").matches) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", fotoPrincipal);
}

galeria.forEach(eventosGaleria);

// plugins animação
if (window.SimpleAnime) {
  new SimpleAnime();
}


