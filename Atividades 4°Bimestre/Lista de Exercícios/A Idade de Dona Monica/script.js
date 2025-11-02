function calcularIdade() {
    var idadeMae = parseInt(document.getElementById("idade-mae").value);
    var idadePrimeiro = parseInt(document.getElementById("idade-primeiro").value);
    var idadeSegundo = parseInt(document.getElementById("idade-segundo").value);
    var resultado = "";

    if (isNaN(idadeMae) || isNaN(idadePrimeiro) || isNaN(idadeSegundo) || idadeMae < 0 || idadePrimeiro < 0 || idadeSegundo < 0) {
        document.getElementById("resultado").innerText = "Por favor insira idades válidas.";
        document.getElementById("resultado").className = "error";
        return;
    }
    if (resultado = idadeMae - idadePrimeiro - idadeSegundo ) {
        document.getElementById("resultado").innerText = "A idade do 3° filho é: " + resultado + " anos.";
    }

}
function limparCampos() {
    document.getElementById("idade-mae").value = "";
    document.getElementById("idade-primeiro").value = "";
    document.getElementById("idade-segundo").value = "";
    document.getElementById("resultado").innerText = "";
    document.getElementById("resultado").className = "";
}