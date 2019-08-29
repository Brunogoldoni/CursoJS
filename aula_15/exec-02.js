let values = [4, 7, 9, 2, 6, 5, 8]
values.sort()
// for (let pos = 0; pos < values.length; pos++) {
//   console.log(`A posição ${pos} tem o valor: ${values[pos]}`)
// }

// Simplificando for para Arrays e Objetos
for (let pos in values) {
  console.log(`A posição ${pos} tem o valor: ${values[pos]}`)
}