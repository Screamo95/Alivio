// Видеоплеер 
let PlayButton = document.querySelector(`.video__box-icon`)
let PlayVideo = document.querySelector(`.video__box-main`)

PlayButton.onclick = function() {
  PlayVideo.setAttribute(`controls`, `controls`)
  PlayVideo.play()
  PlayButton.remove()
}