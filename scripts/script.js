let tentativas = 6;
const listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
  (palavra001 = {
    nome: "IRLANDA",
    categoria: "LUGARES",
  }),
  (palavra002 = {
    nome: "EQUADOR",
    categoria: "LUGARES",
  }),
  (palavra003 = {
    nome: "BRASIL",
    categoria: "LUGARES",
  }),
  (palavra004 = {
    nome: "SINGAPURA",
    categoria: "LUGARES",
  }),
  (palavra005 = {
    nome: "BRUXELAS",
    categoria: "LUGARES",
  }),
  (palavra006 = {
    nome: "MOSCOU",
    categoria: "LUGARES",
  }),
  (palavra007 = {
    nome: "SENEGAL",
    categoria: "LUGARES",
  }),
  (palavra008 = {
    nome: "CHINA",
    categoria: "LUGARES",
  }),
  (palavra009 = {
    nome: "ESPANHA",
    categoria: "LUGARES",
  }),
  (palavra010 = {
    nome: "VATICANO",
    categoria: "LUGARES",
  }),
  (palavra011 = {
    nome: "HULK",
    categoria: "MARVEL",
  }),
  (palavra012 = {
    nome: "THANOS",
    categoria: "MARVEL",
  }),
  (palavra013 = {
    nome: "LOKI",
    categoria: "MARVEL",
  }),
  (palavra014 = {
    nome: "VENOM",
    categoria: "MARVEL",
  }),
  (palavra015 = {
    nome: "WANDA",
    categoria: "MARVEL",
  }),
  (palavra016 = {
    nome: "DEADPOOL",
    categoria: "MARVEL",
  }),
  (palavra017 = {
    nome: "ODIN",
    categoria: "MARVEL",
  }),
  (palavra018 = {
    nome: "JAVIS",
    categoria: "MARVEL",
  }),
  (palavra019 = {
    nome: "VISAO",
    categoria: "MARVEL",
  }),
  (palavra020 = {
    nome: "ULTRON",
    categoria: "MARVEL",
  }),
  (palavra021 = {
    nome: "COXINHA",
    categoria: "COMIDA",
  }),
  (palavra022 = {
    nome: "STROGONOFF",
    categoria: "COMIDA",
  }),
  (palavra023 = {
    nome: "CARBONARA",
    categoria: "COMIDA",
  }),
  (palavra024 = {
    nome: "ARROZ",
    categoria: "COMIDA",
  }),
  (palavra025 = {
    nome: "BOLONHESA",
    categoria: "COMIDA",
  }),
  (palavra026 = {
    nome: "LASANHA",
    categoria: "COMIDA",
  }),
  (palavra027 = {
    nome: "PIZZA",
    categoria: "COMIDA",
  }),
  (palavra028 = {
    nome: "FEIJOADA",
    categoria: "COMIDA",
  }),
  (palavra029 = {
    nome: "PASTEL",
    categoria: "COMIDA",
  }),
  (palavra030 = {
    nome: "COCADA",
    categoria: "COMIDA",
  }),
  (palavra031 = {
    nome: "COBRA",
    categoria: "ANIMAIS",
  }),
  (palavra032 = {
    nome: "HIENA",
    categoria: "ANIMAIS",
  }),
  (palavra033 = {
    nome: "CALOPSITA",
    categoria: "ANIMAIS",
  }),
  (palavra034 = {
    nome: "PAPAGAIO",
    categoria: "ANIMAIS",
  }),
  (palavra035 = {
    nome: "AXOLOTE",
    categoria: "ANIMAIS",
  }),
  (palavra036 = {
    nome: "TARTARUGA",
    categoria: "ANIMAIS",
  }),
  (palavra037 = {
    nome: "GIRAFA",
    categoria: "ANIMAIS",
  }),
  (palavra038 = {
    nome: "PEIXE",
    categoria: "ANIMAIS",
  }),
  (palavra039 = {
    nome: "BALEIA",
    categoria: "ANIMAIS",
  }),
  (palavra040 = {
    nome: "PERIQUITO",
    categoria: "ANIMAIS",
  }),
  (palavra041 = {
    nome: "NARUTO",
    categoria: "DESENHOS",
  }),
  (palavra042 = {
    nome: "ARNOLD",
    categoria: "DESENHOS",
  }),
  (palavra043 = {
    nome: "MICKEY",
    categoria: "DESENHOS",
  }),
  (palavra044 = {
    nome: "XMEN",
    categoria: "DESENHOS",
  }),
  (palavra045 = {
    nome: "GARFIELD",
    categoria: "DESENHOS",
  }),
  (palavra046 = {
    nome: "AVATAR",
    categoria: "DESENHOS",
  }),
  (palavra047 = {
    nome: "FUTURAMA",
    categoria: "DESENHOS",
  }),
  (palavra048 = {
    nome: "SIMPSONS",
    categoria: "DESENHOS",
  }),
  (palavra049 = {
    nome: "POKEMON",
    categoria: "DESENHOS",
  }),
  (palavra050 = {
    nome: "DIGIMON",
    categoria: "DESENHOS",
  }),
  (palavra051 = {
    nome: "TEEN WOLF",
    categoria: "SÉRIES E FILMES",
  }),
  (palavra052 = {
    nome: "INTERESTELAR",
    categoria: "SÉRIES E FILMES",
  }),
  (palavra053 = {
    nome: "STRANGER THINGS",
    categoria: "SÉRIES E FILMES",
  }),
  (palavra054 = {
    nome: "O EXORCISTA",
    categoria: "SÉRIES E FILMES",
  }),
  (palavra055 = {
    nome: "FLASH",
    categoria: "SÉRIES E FILMES",
  }),
  (palavra056 = {
    nome: "THE WALKING DEAD",
    categoria: "SÉRIES E FILMES",
  }),
  (palavra057 = {
    nome: "RIVERDALE",
    categoria: "SÉRIES E FILMES",
  }),
  (palavra058 = {
    nome: "FROZEN",
    categoria: "SÉRIES E FILMES",
  }),
  (palavra059 = {
    nome: "JOGOS VORAZES",
    categoria: "SÉRIES E FILMES",
  }),
  (palavra060 = {
    nome: "HOMEM DE FERRO",
    categoria: "SÉRIES E FILMES",
  }),
];
criarPalavraSecreta();
function criarPalavraSecreta() {
  const indexPalavras = parseInt(Math.random() * palavras.length);

  palavraSecretaSorteada = palavras[indexPalavras].nome;
  palavraSecretaCategoria = palavras[indexPalavras].categoria;
}
montarPalavraTela();
function montarPalavraTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById("palavraSecreta");
  palavraTela.innerHTML = "";

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      if ((palavraSecretaSorteada[i] == " ")) {
        listaDinamica[i] = " ";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        listaDinamica[i] = "&nbsp";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    } else {
      if ((palavraSecretaSorteada[i] == " ")) {
        listaDinamica[i] = " ";
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        palavraTela.innerHTML =
          palavraTela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    }
  }
}

function verificaLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true;
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra);
    comparaListas(letra);
    montarPalavraTela();
  }
}
function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = "#C71585";
  document.getElementById(tecla).style.color = "#ffff";
}

function comparaListas(letra) {
  const posicao = palavraSecretaSorteada.indexOf(letra);
  if (posicao < 0) {
    tentativas--;
    carregaImagem();
    if (tentativas == 0) {
      abreModal(
        "OPS! ",
        " VOCÊ PERDEU... A palavra secreta era <br> " + palavraSecretaSorteada
      );
    }
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }
  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }
  if (vitoria === true) {
    abreModal("PARABÉNS! ", " Você venceu... <br> ");
    tentativas = 0;
  }
}

function carregaImagem() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background =
        "url('./imagens/forca01.png')";
      break;
    case 4:
      document.getElementById("imagem").style.background =
        "url('./imagens/forca02.png')";
      break;
    case 3:
      document.getElementById("imagem").style.background =
        "url('./imagens/forca03.png')";
      break;
    case 2:
      document.getElementById("imagem").style.background =
        "url('./imagens/forca04.png')";
      break;
    case 1:
      document.getElementById("imagem").style.background =
        "url('./imagens/forca05.png')";
      break;

    default:
      document.getElementById("imagem").style.background =
        "url('./imagens/forca.png')";
      break;
  }
}

function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById("exampleModalLabel");
  modalTitulo.innerText = titulo;
  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = mensagem;
  $("#myModal").modal({});
}

let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function () {
  location.reload();
});
