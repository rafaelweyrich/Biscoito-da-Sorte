// Adiciona o evento de mouseover para iniciar a animação de tremor
document.getElementById("biscoitoImg").addEventListener("mouseover", function() {
    document.getElementById("biscoitoImg").classList.add("shaking");
});

// Adiciona o evento de mouseout para parar a animação de tremor
document.getElementById("biscoitoImg").addEventListener("mouseout", function() {
    document.getElementById("biscoitoImg").classList.remove("shaking");
});

document.getElementById("biscoitoImg").addEventListener("click", function() {
    document.getElementById("biscoitoImg").classList.remove("shaking");
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
});

function mostrarTela1() {
    document.getElementById("screen1").style.display = "block";
    document.getElementById("screen2").style.display = "none";
}
