import { state } from "./state.js"
import { reset } from "./actions.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function updateDisplay(minutes, seconds) {
  /* nullish coalesing operator */
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
}

export function countdown() {

  clearTimeout(state.countdownID) 

  if(!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    reset() 
    sounds.timerFinish.play()
    return
  }
 
  updateDisplay(minutes, seconds)
  state.countdownID = setTimeout(() => countdown(), 1000)
}