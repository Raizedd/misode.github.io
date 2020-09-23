import { View } from "../views/View";
import { LocalStorageProperty } from "./LocalStorageProperty";

export class State {
  theme = new LocalStorageProperty('theme', 'light', (_, value) => {
    document.documentElement.setAttribute('data-theme', value)
  })
  language = new LocalStorageProperty('language', 'en', (_, value) => {
    document.documentElement.setAttribute('lang', value)
  })

  private view?: View
  setView(view: View) {
    this.view = view
  }

  invalidate() {
    const target = document.getElementById('app')!
    target.innerHTML = this.view!.render()
    this.view!.mounted(target)
  }
}
