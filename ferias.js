function calcularFerias() {
    const salarioBruto = parseFloat(document.getElementById("salarioBruto").value);

    const tercoFerias = salarioBruto / 3;
    const finalFerias = salarioBruto * 2 + tercoFerias;

    const resultado = `Salário Bruto: R$ ${salarioBruto.toFixed(2)}<br>
                       Terço de Férias: R$ ${tercoFerias.toFixed(2)}<br>
                       Valor Final Ferias: R$ ${finalFerias.toFixed(2)}`;

    document.getElementById("resultado").innerHTML = resultado;
}
