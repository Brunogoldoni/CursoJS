// Exercício 02
// let nome = window.prompt('Qual é o seu nome?');
// console.log("É um prazer te conhecer, " + nome + '!');

// Exercício 03
// let n1 = Number(window.prompt ('Digite um número: '))
// let n2 = Number(window.prompt ('Digite novamente um número: '))

// let soma = n1 + n2
// window.alert(`A soma dos entre ${n1} e ${n2} é igual a: ` + soma)

//Exercício 03
let nome = window.prompt('Qual é o seu nome?')
let firstLetter = nome.charAt(0).toUpperCase();
let removeFirstLetter = nome.slice(1).toLowerCase();
document.write(`Seu nome é <strong>${firstLetter}${removeFirstLetter}</strong><br><br>`)
document.write(`Seu nome em letras maiúsculas é <strong>${nome.toUpperCase()}</strong><br>`)
document.write(`Seu nome em letras minúsculas é <strong>${nome.toLowerCase()}</strong>`)
