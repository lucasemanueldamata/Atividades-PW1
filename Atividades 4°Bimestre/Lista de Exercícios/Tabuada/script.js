function criarTabuada() {
    let numero = parseInt(document.getElementById("numero").value);
    let tabuada = document.getElementById("tabuada");
    let error = document.getElementById("error");

    if (numero >= 1 && numero <= 10) {
        tabuada.innerHTML = "";

        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            let linha = document.createElement("tr");
            let coluna1 = document.createElement("td");
            let coluna2 = document.createElement("td");
            coluna1.textContent = numero + " x " + i;
            coluna2.textContent = resultado;

            linha.appendChild(coluna1);
            linha.appendChild(coluna2);
            tabuada.appendChild(linha);
        }

        error.textContent = "";
        document.getElementById("clear").style.display = "block";

    } else {
        error.textContent = "Por favor insira um número entre 1 e 10.";
        error.className = "error";
    }
}
function limparInput() {
    document.getElementById("numero").value = "";
    document.getElementById("tabuada").innerHTML = "";
    document.getElementById("error").textContent = "";
    document.getElementById("error").className = "";
    document.getElementById("clear").style.display = "none";
}