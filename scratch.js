const posicaoSuperiorInicial = 50,
     posicaoEsquerdaInicial = 50,
     posicaoSuperiorFinal = 500,
     posicaoEsquerdaFinal = 500,
     imgAvatar = document.getElementById('imgAvatar'),
     styleAvatar = window.getComputedStyle(imgAvatar),
     txtPixel = document.getElementById("txtPixel");

var posicaoSuperior = 70,
    posicaoEsquerda = 70,
    topAvatar,
    leftAvatar;

imgAvatar.style.position = "absolute";
imgAvatar.style.top = posicaoSuperior + "px";
imgAvatar.style.left = posicaoEsquerda + "px";

function getTopStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('top').replace("px", ''));
}

function getLeftStyle(elementToGet) {
    let styleElement = window.getComputedStyle(elementToGet);
    return parseInt(styleElement.getPropertyValue('left').replace("px", ''));
}

function moverParaEsquerda() {
    console.clear();
    ropAvatar = getLeftStyle(imgAvatar);
    if (leftAvatar > posicaoEsquerdaInicial) {
        posicaoEsquerda -= 1;
        imgAvatar.style.left = posicaoEsquerda + "px";
    } else {
        console.error("Ops! Chegou ao limite e não3 é possível mais mover para a esquerda. Tente outro botão.");
    }
    console.log("Posição do avatar à esquerda: ", imgAvatar.style.left);
}