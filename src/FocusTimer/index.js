import { state } from "./state.js"
import * as timer from "./timer.js"
import * as event from "./events.js"

export function start(minutes, seconds){
  /* nullish coalesing operator */
  state.minutes = minutes ?? state.minutes
  state.seconds = seconds ?? state.seconds

  timer.updateDisplay()

  event.registerControls()
  event.registerMusic()
}