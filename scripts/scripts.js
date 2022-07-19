//1. Escreva um algoritmo que armazene três valores numéricos
//diferentes e, em seguida, mostre no console a soma, a média, o
//produto, o menor e o maior desses números. O algoritmo deve
//validar e parar a execução ao mostrar um alerta com a mensagem
//“Você repetiu algum número na digitação" se caso duas variáveis
//estiverem armazenando o mesmo valor. Utilize o console.log() para
//mostrar o resultado esperado.
   
    let x1 = Number(prompt("Digite o primeiro número:"))
    let x2 = Number(prompt("Digite o segundo número:"))
    let x3 = Number( prompt("Digite o terceiro número:"))
    let soma = x1 + x2 + x3
    let media = (x1 + x2 + x3) / 3
    let produto = x1 * x2 * x3
    

    if(isNaN(x1) ||  isNaN(x2) || isNaN(x3)){
        alert("valores incorretos. Informe um numero.")
        console.log("valores incorretos. Informe um numero.")
    }else

    if(x1 === '' || x2 === '' || x3 === ''){
        alert("Digite um valor.")
        console.log("Digite um valor.")
    }else

    console.log("Exercício 01: <br>")
    document.writeln(`A soma de ${x1} + ${x2} + ${x3} é igual a: ${soma} <br>`)
    document.writeln(`o produto é ${x1} * ${x2} * ${x3} é igual a: ${produto} <br>`)
    document.writeln(` a média de ${x1}+${x2}+${x3}  é igual a: ${media }<br>`)
    console.log(soma) 
    console.log(media)
    console.log(produto)
   // 2. Crie um algoritmo que armazene um número inteiro positivo, e gere
//um alerta com as seguintes mensagens:
//a. “Número é par!”, se o valor armazenado for par;
//b. “Número é impar!”, se o valor armazenado for ímpar;
    console.log("Exercício 02: ")

    if (x1 % 2 == 0 ){
        console.log(`O numero é par ${x1}`)
        document.writeln(`O numero é par ${x1}`)
    }else{
        console.log(`O numero é impar ${x1}`)
        document.writeln(`O numero é impar ${x1}`)
    }
    
  /*  Crie um algoritmo que armazene três valores, para cada um dos
    lados de um triângulo: A, B e C. Verifique se os lados fornecidos
    formam realmente um triângulo. Se formar, deve mostrar no console
    o tipo de triângulo: isósceles, escaleno ou equilátero.
    a. Para verificar se os lados fornecidos formam um triângulo:
     A < B + C e B < A + C e C < A + B.
    b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
    B=C);
    c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
    B<>C e A<>C);
    d. Triângulo equilátero: possui todos os lados iguais (A=B e
    B=C);
 */
    a = x1
    b = x2
    c = x3
    console.log("Exercício 03:")
    if(a + b > c && a + c > b && b + c > a){
        console.log("Os 3 lados formam um triangulo!\n");
        if(a == b && a == c)
        console.log("o triangulo formado é  Equilatero\n")
        else
            if(a == b || a == c || b == c)
            console.log("o triangulo formado é Isosceles\n")
            else
            console.log(" o triangulo formado é  Escaleno\n")
    }
    else{
        console.log("Os 3 lados NAO formam um triangulo!\n")
        document.writeln
    }

    /* 4. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).*/

    console.log("Exercício 04")
    let anoNasc = Number(prompt("Informe o ano de nascimento: \n"))
    let anoAtual = Number(prompt("Informe o ano atual: \n"))
    anoAtual = new Date().getFullYear()
    let idade = anoAtual - anoNasc

    if(idade >= 16 ){
            console.log("Você pode votar.")
    }else{
        console.log("Você ainda não pode votar.")
    } 
    
   /*
5. Escreva um algoritmo que armazene o valor 10 em uma variável A e
o valor 20 em uma variável B. A seguir (utilizando apenas atribuições
entre variáveis) troque os seus conteúdos fazendo com que o valor
que está em A passe para B e vice-versa. Ao final, mostre no console
os valores que ficaram armazenados nas variáveis após
modificadas. */
   

let aux = 0
let   vA = 10
let  vB = 20

vA = aux
vA = vB
vB = aux
console.log('Exercicio 05')
console.log("O valor de A é : ", a )
console.log("O valor de B é :", b)

 /*
 6. Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit. */

console.log("Exercicio 06")

let grausString = String(prompt("INforme a temperatura em graus para transformar em Fahrenheit: \n"))
let graus = parseFloat(grausString.replace(',', '.'))

resultado = (graus * 1.8) + 32
console.log(`A temperatura ${graus}º para fahrenheit é ${resultado}`)

/*
7. Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores.
*/

let brancos = Number(prompt("Informe o núm de votos brancos: \n"))
let nulos = Number(prompt("Informe o núm de votos nulos: \n"))
let validos = Number(prompt("Informe o núm de votos válidos: \n"))
let eleitores = brancos + nulos + validos
let percNulos = nulos / eleitores * 100
let percBrancos = brancos / eleitores*100
let percValidos = validos / eleitores * 100

console.log("Percentual para nulos =", percNulos, "%");
console.log("Percentual para brancos =", percBrancos, "%");
console.log("Percentual para validos = ", percValidos, "%");

/*
8. Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:

Escreva um algoritmo que armazene o preço de tabela e o número de
vezes em que o pagamento será feito. Calcule o valor de cada parcela e o
preço total da compra e imprima no console.
*/
let valorTabela =Number(prompt(" Informe o valor do produto: \n"))
let parcelas = Number(prompt(" Informe o numero de parcelas: \n"))
let valorParc 
let total

if(parcelas <= 0 || parcelas > 15){
    alert("número de parcelas inválido.")
}else if(parcelas === 1){
    total = valorTabela -(valorTabela * (2.5/100))
}else if(parcelas === 1){
    console.log(`Preço de tabela ${valorTabela}, preco com desconto ${total}, e qtd parcelas ${parcelas}`)
}else if(parcelas <= 5){
    valorParc = valorTabela / parcelas
    total = valorParc
    console.log(`Preço de tabela ${valorTabela}, preco sem acrescimo ${total}, e qtd parcelas ${parcelas}`)
}else if(parcelas <= 10){
    
    total = valorTabela + (valorTabela *(6 / 100))
    valorParc = total / parcelas

    console.log(`Preço de tabela ${valorTabela}, valor com juros ${total}, e número de parcelas ${parcelas}`)
}else if(parcelas <= 15){
    
    total = valorTabela + (valorTabela *(13 / 100))
    valorParc = total / parcelas
    
    console.log(`Preço de tabela ${valorTabela}, valor com juros ${total}, e qtd parcelas ${parcelas}`)
}else{
    console.log("Número de parcelas inválidas.")
}
