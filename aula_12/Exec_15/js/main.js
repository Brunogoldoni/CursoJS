function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtano')
  let res = document.querySelector('p#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] - Verifique os dados e tente Novamente! ')
  } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let = genero = ''

    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'homem-pic.png')
        img.style.height = '150px'
        img.style.width = '150px'
        img.style.marginTop = '20px'
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'homem-pic.png')
        img.style.height = '150px'
        img.style.width = '150px'
        img.style.marginTop = '20px'
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'homem-pic.png')
        img.style.height = '150px'
        img.style.width = '150px'
        img.style.marginTop = '20px'
      } else {
        // Idoso
        img.setAttribute('src', 'homem-pic.png')
        img.style.height = '150px'
        img.style.width = '150px'
        img.style.marginTop = '20px'
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'mulher-pic.png')
        img.style.height = '150px'
        img.style.width = '150px'
        img.style.marginTop = '20px'
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'mulher-pic.png')
        img.style.height = '150px'
        img.style.width = '150px'
        img.style.marginTop = '20px'
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'mulher-pic.png')
        img.style.height = '150px'
        img.style.width = '150px'
        img.style.marginTop = '20px'
      } else {
        // Idoso
        img.setAttribute('src', 'mulher-pic.png')
        img.style.height = '150px'
        img.style.width = '150px'
        img.style.marginTop = '20px'
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }


}
