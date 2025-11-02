function verificarNumero() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
    const error = document.getElementById("error");

    resultado.textContent = "";
    error.textContent = "";

    if (numero === "") {
        error.textContent = "Por favor, digite um número.";
        return;
    }

    if (isNaN(numero)) {
        error.textContent = "Isso não é um número válido.";
        return;
    }

    if (numero > 0) {
        resultado.textContent = "O número é positivo.";
    } else if (numero < 0) {
        resultado.textContent = "O número é negativo.";
    } else {
        resultado.textContent = "Nulo.";
    }
}
