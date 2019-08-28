function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = `Impossível contar!!!`
    res.style.marginBottom = '30px'
    res.style.marginTop = '30px'
    res.style.textAlign = 'center'
    res.style.fontWeight = 'bold'
    window.alert('[ERRO] - Por favor, preencha todos os campos...')
  } else {
    res.innerHTML = `Contando: <br>`
    res.style.marginBottom = '30px'
    res.style.marginTop = '30px'
    res.style.textAlign = 'center'
    res.style.fontWeight = 'bold'

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      window.alert('Passo inválido! Iremos considerar o valor de Passo: 1')
      p = 1
    }
    if (i < f) {
      // Contagem Crescente
      for (let c = 1; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`
        res.style.marginBottom = '30px'
        res.style.fontWeight = 'bold'
      }
    } else {
      // Contagem Regressiva
      for (c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`
        res.style.marginBottom = '30px'
        res.style.fontWeight = 'bold'
      }
    }
    res.innerHTML += ` \u{1F3C1}`
  }
}