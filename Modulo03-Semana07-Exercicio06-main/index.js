calculadora()

function calculadora() {
    let operacaoCorreta = false;
    while (operacaoCorreta == false) {
        let operacao = prompt("Insira o tipo de operação \n [+] Soma\n [-] Subtração\n [*] Multiplicação\n [/] Divisão Real\n [%] Divisão Inteira\n [**] Potenciação\n [0] Sair")
        switch (operacao) {
            case '+':
                soma()
                break;
            case '-':
                subtracao()
                break;
            case '*':
                multiplicacao()
                break;
            case '/':
                divisaoReal()
                break;
            case '%':
                divisaoInteira()
                break;
            case '**':
                potenciacao()
                break;
            case '0':
                operacaoCorreta = true;
                break;
            default:
                alert("Operação Invalida")
                break;
        }
    }
}

function soma() {
    let n1 = Number(prompt("Insira o valor de N1"));
    let n2 = Number(prompt("Insira o valor de N2"));

    alert(`${n1} + ${n2} = ${n1 + n2}`);
}

function subtracao() {
    let n1 = Number(prompt("Insira o valor de N1"));
    let n2 = Number(prompt("Insira o valor de N2"));

    alert(`${n1} - ${n2} = ${n1 - n2}`);
}

function multiplicacao() {
    let n1 = Number(prompt("Insira o valor de N1"));
    let n2 = Number(prompt("Insira o valor de N2"));

    alert(`${n1} * ${n2} = ${n1 * n2}`);
}

function divisaoReal() {
    let n1 = Number(prompt("Insira o valor de N1"));
    let n2 = Number(prompt("Insira o valor de N2"));
    alert(`${n1} / ${n2} = ${n1 / n2}`);
}

function divisaoInteira() {
    let n1 = Number(prompt("Insira o valor de N1"));
    let n2 = Number(prompt("Insira o valor de N2"));

    alert(`${n1} % ${n2} = ${Math.floor(n1 / n2)}`);
}

function potenciacao() {
    let n1 = Number(prompt("Insira o valor de N1"));
    let n2 = Number(prompt("Insira o valor de N2"));

    alert(`${n1} ** ${n2} = ${n1 ** n2}`);
}

