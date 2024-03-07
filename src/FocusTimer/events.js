import * as el from "./elements.js"
import * as actions from "./actions.js"

export function registerControls() {
  el.timerControls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function'){
      return
    }

    actions[action]()
  })
}

export function registerMusic() {
  el.soundsControls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function'){
      return
    }

    actions[action]()
  })
}