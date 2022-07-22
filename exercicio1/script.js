const numpar = Number(prompt('Insira um número par'))
const restoDiv = numpar % 2

console.log(restoDiv)
console.log(typeof numpar)

//c) Teste o programa com diversos números pares. Você notou um padrão?
//Escreva em um comentário de código.

// Resposta: Retorna sempre 'zero'. Todo número par divido por dois não sobra 'resto'

//d) O que acontece no console se o usuário inserir um número ímpar?
//Escreva em um comentário de código

//Resposta: A divisão funciona, retornando o 'resto' da divisão

/*Operadores:

-> Aritiméticos:
    + SOMA
    - SUBTRAÇÃO
    * MULTIPLICAÇÃO
    / DIVISÃO - RETORNA O NÚMERO INTEIRO
    % MÓDULO - RETORNA O RESTO (servepara saber se o número é par ou não)

    //Pares tem resto 0 quando divididos por um npumero par
    EX:*/ console.log (10/2)
            console.log (10%2)
    // UM NÚMERO MÓDULO OUTRO, SE O RESTO É 0, ENTÃO ELE É PAR

    /*EX:*/ console.log (11%2)
    //UM NÚMERO MÓDULO OUTRO, SE O RESTO É 1, ENTÃO É ÍMPAR


/*-> OPERADORES RELACIONAIS OU COMPARADORES
    > >= < <=
    == (IGUALDADE) & === (IGUALDADE RESTRITA)
    
   console.log(typeof(5 === "5"))
   console.log(typeof(5 + 5))
    
    !== (NEGAÇÃO)

-> OPERADORES LÓGICOS
AND (&&) -> TODAS AS CONDIÇÕES DEVEM SER VERDADEIRAS PARA SER VERDADE

OU (||) -> PELO MENOS UMA CONDIÇÃO DEVE SER VERDADEIRA PARA SER VERDADE

NEGAÇÃO (!) -> INVERTE O VALOR BOLEANO*/

console.log(!0) // 0 -> um valor nulo, FALSE
console.log(!1) //1 -> tem um valor, TRUE
console.log(!-1) // -1 -> tem um valor
console.log(!50) // 50 -> tem um valor

console.log (1(50>30))

/*PRECEDÊNCIA
O PRIMEIRO SE CALCULA -> MULTIPLICAÇÃO E DIVISÃO
SEGUNDO SE CALCULA -> SOMA E SUBTRAÇÃO
// PRECEDENCIA é calculado primeiro que todo mundo
// primeiro se calcula => multiplicacao e divisao
// segundo se calcula => soma e subtraçao*/
console.log(2 * 2 + 2) // 2 * 2 = 4 + 2 = 6
console.log(2 + 2 * 2) // 2 * 2 = 4 + 2 = 6
console.log((2 + 2) * 2) // 2 + 2 = 4 * 2 = 8






