// 5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

function somar( num1, num2){
    return num1 + num2
}

function multiplicar( num1,num2){
    return num1 * num2
}

function dividir( num1, num2){
    return num1 / num2
}

function subtrair( num1, num2){
    return num1 - num2
}

let operaçao= 'multiplicaçao'
let num1= 15
let num2= 27

switch (operaçao){
    case 'soma':
        console.log(`O resultado da soma é = ${(somar (num1,num2))}`)
    break

    case 'multiplicaçao':
        console.log(`O resultado da multiplicaçao é = ${(multiplicar (num1,num2))}`)
    break

    case 'divisao':
        console.log(`O resultado da divisao é = ${dividir (num1,num2)}`)
        break

    case 'subtraçao':
        console.log(`O resultado da subtraçao é = ${subtrair (num1, num2)}`)
        break
       defeault
        console.log('Insira uma entrada válida')


}
