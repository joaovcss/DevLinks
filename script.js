function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector('#profile img')

  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt",
      'Foto do João Victor com capuz preto usando oculos e bigodinho fininho e com a borda da imagem preta'
    )
  }
  else{
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute(
      "alt",
      "Foto do João Victor com capuz preto usando oculos e bigodinho fininho e com a borda da imagem branca"
    )
  }
  
 


}