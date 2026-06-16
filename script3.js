function converter(tipo) {
    const valor = parseFloat(document.getElementById('valor').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const display = document.getElementById('resultado');

    if (isNaN(valor) || isNaN(taxa)) {
        display.innerText = "Por favor, insira valores válidos.";
        return;
    }

    if (tipo === 'dolarParaReal') {
        display.innerText = `R$ ${(valor * taxa).toFixed(2)}`;
    } else {
        display.innerText = `$ ${(valor / taxa).toFixed(2)}`;
    }
}