let num = [5, 3, 7, 9]
num.push(1)
num.sort()

console.log(num)
console.log(`O valor tem ${num.length} posições`)
console.log(`O Primeiro valor do vetor é: ${num[0]}`)

let pos = num.indexOf(7)
if (pos == -1) {
  console.log('O valor não foi encontrado!!!')
} else {
  console.log(`O valor 8 está na posição ${pos}`)
}
