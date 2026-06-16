function converter() {
    const kelvin = parseFloat(document.getElementById("kelvin").value);

    if (isNaN(kelvin)) {
        document.getElementById("resultado").innerHTML =
            "Digite um valor válido.";
        return;
    }

    const celsius = kelvin - 273.15;

    document.getElementById("resultado").innerHTML =
        `${kelvin} K = ${celsius.toFixed(2)} °C`;
}
