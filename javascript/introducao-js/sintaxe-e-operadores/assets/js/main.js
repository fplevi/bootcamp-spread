
const form = document.getElementById('formulario');
const resultadoWraper = document.getElementById('resultado');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var inputField_1 = document.getElementById('task-input-1');
    var numberField_1 = Number(inputField_1.value)
    var inputField_2 = document.getElementById('task-input-2');
    var numberField_2 = Number(inputField_2.value)
    var resultado = comparaNumeros(numberField_1, numberField_2)
    resultadoWraper.innerHTML = resultado;
});

function comparaNumeros (num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase = criaSegundaFrase(num1,num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1,num2) {
    let saoIguais = '';
    if(num1 !== num2) {
        saoIguais = 'não'
    } return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1,num2) {
    const soma = num1 + num2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

