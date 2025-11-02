function verificarPrimo() {
    const numeroInput = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero < 2) {
        resultadoDiv.textContent = 'Por favor, insira um número inteiro maior ou igual a 2.';
        return;
    }

    let ehPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        resultadoDiv.textContent = `${numero} é um número primo.`;
    }

    else {
        resultadoDiv.textContent = `${numero} não é um número primo.`;
    }

    numeroInput.value = '';
}