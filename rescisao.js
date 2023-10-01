function calcularRescisao() {
    const salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
    const mesesTrabalhados = parseInt(document.getElementById("mesesTrabalhados").value);

   
    const feriasProporcionais = (salarioBruto / 12) * mesesTrabalhados;

    
    const decimoTerceiroProporciona = (salarioBruto / 12) * mesesTrabalhados;

    const salarioTotal = salarioBruto + feriasProporcionais + decimoTerceiroProporciona;

    const resultado = `Salário Bruto: R$ ${salarioBruto.toFixed(2)}<br>
                       Férias Proporcionais: R$ ${feriasProporcionais.toFixed(2)}<br>
                       Décimo Terceiro Proporcional: R$ ${decimoTerceiroProporciona.toFixed(2)}<br>
                       Total: R$ ${salarioTotal.toFixed(2)}`;

    document.getElementById("resultado").innerHTML = resultado;
}
