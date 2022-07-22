const num1 = Number(prompt('Insira um número a sua escolha'))
const num2 = Number(prompt('Insira um segundo número a sua escolha'))
let resultado

resultado = num1 > num2
console.log("O primeiro número é maior que segundo?", resultado)

resultado = num1 == num2
console.log("O primeiro número é igual que segundo?", resultado)

/*resultado = num1 / num2
console.log("O primeiro número é divisível que segundo?", Boolean (resultado))

resultado = num2 / num1
console.log("O primeiro número é maior que segundo?", Boolean (resultado))*/

resultado = (num1 % num2) === 0
console.log("O primeiro numero é divisível pelo segundo?",resultado)

resultado = (num2 % num1) === 0
console.log("O primeiro numero é divisível pelo segundo?",resultado)


/*O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true*/

