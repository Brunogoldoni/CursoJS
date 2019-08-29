let n = 7

function parimpar() {
  if (n % 2 !== 0) {
    return `O Número: ${n} é Ímpar`
  } else {
    return `O Número ${n} é Par`
  }
}

console.log(parimpar())