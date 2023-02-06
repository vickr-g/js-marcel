/****************************************************************
 * objetivo: arquivo de funcoes para calcular uma tabuada
 * data: 06/02/2023
 * autor: victoria gindre
 * versao: 1.0
 ***************************************************************/

//função que gera uma tabuada ate um contador especi0fico
const getTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',','.'));
    let tabuadaContador = Number(String(maxMultiplicador).replace(',','.'));
    let status = true;
    let resultado;
    let contador = 0; //start da repetição
    if (tabuada == 0 || tabuadaContador == 0)
        status = false;
    else if (isNaN(tabuada) || isNaN(tabuadaContador))
        status = false;
    else {
        // while (contador <= tabuadaContador) {
        //     //dois x numero=resultado
        //     resultado = tabuada * contador;
        //     console.log(tabuada + 'x' + contador + '=' + resultado);
        //     contador += 1
        // }
        for (let contador = 0; contador < tabuadaContador; contador++) {
           resultado = tabuada * contador;
    console.log(`${tabuada}  x  ${contador}  =  ${resultado}`);
            
        }
    }
    return status;
};


getTabuada(1,10);

module.exoports = {
    getTabuada
}
