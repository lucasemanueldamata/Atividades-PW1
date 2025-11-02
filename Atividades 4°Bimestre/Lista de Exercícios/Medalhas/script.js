function verificarMedalha() {
    var pontuacao = parseInt(document.getElementById("pontuacao").value);
    var medalha = "";

    if (isNaN(pontuacao) || pontuacao < 0 || pontuacao > 100) {
        document.getElementById("resultado").innerText = "Por favor insira uma pontuação válida entre 0 e 100.";
        document.getElementById("resultado").className = "error";
        return;
    }

    if (pontuacao >= 90) {
        medalha = "Ouro";
    } else if (pontuacao >= 75) {
        medalha = "Prata";
    } else if (pontuacao >= 50) {
        medalha = "Bronze";
    } else {
        medalha = "Nenhuma medalha";
    }

    document.getElementById("resultado").innerText = "Medalha: " + medalha;
}
function resetar () {
    document.getElementById("pontuacao").value = "";
    document.getElementById("resultado").innerText = "";
    document.getElementById("resultado").className = "";
}