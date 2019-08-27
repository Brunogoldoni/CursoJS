function carregar() {
  let msg = window.document.getElementById('msg')
  let img = window.document.getElementById('img')

  let data = new Date()
  let hour = data.getHours()
  // let hour = 21
  msg.innerHTML = `Agora são ${hour} horas.`

  if (hour >= 0 && hour < 12) {
    // Bom Dia!!!
    img.scr = 'assets/img/' + 'dia.jpg'
    document.body.style.background = '#edb027'
  } else if (hour >= 12 && hour <= 18) {
    // Boa Tarde!!!
    img.src = 'assets/img/' + 'tarde.jpg'
    document.body.style.background = '#b9846f'
  } else {
    // Boa Noite!!!
    img.src = 'assets/img/' + 'noite.jpg'
    document.body.style.background = '#515154'
  }
}
