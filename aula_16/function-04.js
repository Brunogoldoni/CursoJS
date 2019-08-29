// Calculando fatorial
function factorial(n) {
  let fact = 1
  for (c = n; c > 1; c--) {
    fact *= c
  }
  return fact
}

console.log(factorial(5))