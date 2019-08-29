// n=0 serve para que o valor de n se inicie igual a zero, evitando quebra na soma caso o usuário passe somente um valor.
function add (n1=0, n2=0) {
  return n1 + n2
}

console.log(add(337, 123))
