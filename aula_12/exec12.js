let now = new Date()
let hour = now.getHours()

if (hour < 12) {
  console.log('Bom Dia!!!')

} else if (hour <= 18) {
  console.log('Boa Tarde!!!')

} else {
  console.log('Boa Noite!!!')
}

console.log(`Agora são exatamente ${hour} horas.`)