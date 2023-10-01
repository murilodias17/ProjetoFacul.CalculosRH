function calcularSalario() {
    const salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
    let inss;
    let irrf;

    if (salarioBruto <= 1200) {
        inss = salarioBruto * 0.07;
        irrf = 0;
    } else if (salarioBruto <= 2500) {
        inss = salarioBruto * 0.09;
        irrf = salarioBruto * 0.075;
    } else if (salarioBruto <= 3000) {
        inss = salarioBruto * 0.1;
        irrf = salarioBruto * 0.1;
    } else {
        inss = salarioBruto * 0.1;
        irrf = salarioBruto * 0.12;
    }

    const salarioLiquido = salarioBruto - inss - irrf;

    const resultado = `Salário Bruto: R$ ${salarioBruto.toFixed(2)}<br>
                       INSS: R$ ${inss.toFixed(2)}<br>
                       IRRF: R$ ${irrf.toFixed(2)}<br>
                       Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`;

    document.getElementById("resultado").innerHTML = resultado;
}
