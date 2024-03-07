import { state } from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
  sounds.buttonPlay.play()
}

export function reset(){
  state.isRunning = document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function addFiveMinutes(){
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  minutes = minutes + 5
  seconds = 0
  timer.updateDisplay(minutes)
}

export function removeFiveMinutes(){
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  if(minutes > 5){
    minutes = minutes - 5
    seconds = 0
  }
  timer.updateDisplay(minutes, seconds)
}

export function ambientaçãoFloresta(){
  state.isMute = document.documentElement.classList.toggle('music-on') 
  verification()
  if(state.isMute){
    sounds.forest.play()
    buttonFocus()
    return
  }
  sounds.forest.pause()
}

export function ambientaçãoChuva(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  verification()
  if(state.isMute){
    sounds.rain.play()
    return
  }
  sounds.rain.pause()
}

export function ambientaçãoPadaria(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  verification()
  if(state.isMute){
    sounds.coffeeShop.play()
    return
  }
  sounds.coffeeShop.pause()
}

export function ambientaçãoLareira(){
  state.isMute = document.documentElement.classList.toggle('music-on')
  verification()
  if(state.isMute){
    sounds.fire.play()
    return
  }
  sounds.fire.pause()
}

function verification() {
  if(sounds.fire.play() || sounds.coffeeShop.play() || sounds.forest.play() || sounds.rain.play()){
    sounds.fire.pause()
    sounds.coffeeShop.pause()
    sounds.forest.pause()
    sounds.rain.pause()
  }
}


