document.getElementById("contrasteBtn").addEventListener("click", function () {
    document.body.classList.toggle("contraste");
});
document.addEventListener("DOMContentLoaded", () => {

    let tamanhoFonte = 16;

document.getElementById("aumentarFonte").addEventListener("click", () => {
    if (tamanhoFonte < 24) {
        tamanhoFonte += 2;
        document.documentElement.style.fontSize = tamanhoFonte + "px";
    }
});

document.getElementById("diminuirFonte").addEventListener("click", () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.documentElement.style.fontSize = tamanhoFonte + "px";
    }
});
});