let idade = 22;
console.log(`Você tem ${idade} Anos`)
if (idade < 16) {
  console.log('Você Ainda não tem Idade para Votar!')
} else if (idade < 18 || idade > 65) {
  console.log('Seu Voto é Opcional!')
} else {
  console.log('Seu Voto é Obrigatorio!')
}