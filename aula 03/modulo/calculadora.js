/****************************************************************
 * objetivo: arquivo de funcoes para calculos matematico
 * data: 03/02/2023
 * autor: victoria gindre
 * versao: 1.0
 ***************************************************************/

// função para realizar calculos matematicos 
//forma 1 de criar uma funcao(metodo mais t r a d i c i o n a l)
//retirando conteudo dos argumnetos 
//     let valor1 = Number(numero1);
//     let valor2 = Number(numero2);
//     let operacao = tipoCalculo;
//     let resultado;
//     let status = true;

//     if (operacao == 'SOMAR') {
//         resultado = valor1 + valor2;

//     } else if (operacao == 'SUBTRAIR') {
//         resultado = valor1 - valor2;
// function calculadora(numero1, numero2, tipoCalculo) {

//     } else if (operacao == 'MULTIPLICAR') {
//         resultado = valor1 * valor2;

//     } else if (operacao == 'DIVIDIR') {
//         resultado = valor1 / valor2;

//         if (valor2 == 0) {
//             console.log('ERRO: Impossivel fazer divisão por 0')
//             status = false;
//         } else {
//             resultado = valor1 / valor2
//         }
    

//     //Validação para tratar quando a varavel resultado não for processada por algum problema
//     if (resultado == undefined) {
//         return false;
//     } else {
//         return resultado;
//     }

//}
//forma (metodoo mais utilizado js)
const calculadora = function (numero1, numero2, tipoCalculo) {
    
        //retirando conteudo dos argumnetos 
        let valor1 = Number(numero1);
        let valor2 = Number(numero2);
        let operacao = tipoCalculo.toUpperCase();
        let resultado;
        let status = true;


        // if (operacao == 'SOMAR') {
        //     resultado = valor1 + valor2;

        // } else if (operacao == 'SUBTRAIR') {
        //     resultado = valor1 - valor2;

        // } else if (operacao == 'MULTIPLICAR') {
        //     resultado = valor1 * valor2;

        // } else if (operacao == 'DIVIDIR') {
        //     resultado = valor1 / valor2;


        switch (operacao) {

            case 'SOMAR':
                resultado = somar(valor1, valor2);
                break;
            case 'SUBTRAIR': 
            resultado = subtrair(valor1 - valor2);
                break;
            case 'MULTIPLICAR':
                resultado = multiplicar(valor1 * valor2);
                break;
            case 'DIVIDIR':
                if (valor2 == 0) {
                    console.log('ERRO: Impossivel fazer divisão por 0')
                    status = false;
                } else {
                    resultado = dividir(valor1 / valor2);
                }
                break;
//permeite entrar nessa opcao quando nenhum dos case for valido(como se fosse o ultimo else de uma estrutura de if...)
                default:
                   
                        console.log('ERRO: A sua escolha de operação não é válida');
                        status = false;
                    

        }

        //Validação para tratar quando a varavel resultado não for processada por algum problema
        if (resultado == undefined || status == false) {
            return false;
        } else {
            return resultado;
        }

    }
    //forma3 de criar função(metodo arrow function )
    const somar = (valor1, valor2) => Number(valor1) + Number(valor2);
    const subtrair = (valor1, valor2) => Number(valor1) - Number(valor2);
    const dividir = (valor1, valor2) => Number(valor1) / Number(valor2);
    const multiplicar = (valor1, valor2) => Number(valor1) * Number(valor2);

//permite adicionar  uma function no escopo global :} 
//as fuction que nao estiveram aqui o exports, serao tratada apenas como escopo local..... p r i v a t e
module.exports = {
    calculadora
}




