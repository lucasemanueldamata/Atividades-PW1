function verificarMedalha() {
    var pontuacao = parseInt(document.getElementById("pontuacao").value);
    var medalha = "";

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
function limparCampo() {
    document.getElementById("pontuacao").value = "";
    document.getElementById("resultado").innerText = "";
    document.getElementById("resultado").className = "";
}