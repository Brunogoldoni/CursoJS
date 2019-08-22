// Exercício 02
// let nome = window.prompt('Qual é o seu nome?');
// console.log("É um prazer te conhecer, " + nome + '!');

//Exercício 03
// let n1 = Number(window.prompt ('Digite um número: '))
// let n2 = Number(window.prompt ('Digite novamente um número: '))
// let soma = n1 + n2
// window.alert(`A soma dos números ${n1} e ${n2} é igual a: ` +  soma.toFixed(2).replace('.',','))

//Exercício 04
// let nome = window.prompt('Qual é o seu nome?')
// let firstLetter = nome.charAt(0).toUpperCase();
// let removeFirstLetter = nome.slice(1).toLowerCase();
// document.write(`Seu nome é <strong>${firstLetter}${removeFirstLetter}</strong><br><br>`)
// document.write(`Seu nome em letras maiúsculas é <strong>${nome.toUpperCase()}</strong><br>`)
// document.write(`Seu nome em letras minúsculas é <strong>${nome.toLowerCase()}</strong>`)


// Exercício 05
  // let p1 = window.document.getElementsByTagName('p')[1]
  // window.document.write(`Está escrito assim: ` + p1.innerText)
  // p1.style.color = '#56a343'

  // ByID
  // let d = window.document.getElementById('msg')
  // d.style.background = 'blue'
  // d.innerText = 'Estou aguardando...'
  // window.document.getElementById('msg').innerText = 'Olá, Mundo!'

  // ByClassName
  // let x = window.document.getElementsByClassName('msg')[0]
  // x.innerText = 'Olá!'

  let y = window.document.querySelector('div#msg')
  y.style.color = 'orange'
  y.style.borderRadius = '4px'