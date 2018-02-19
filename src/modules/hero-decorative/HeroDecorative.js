import template from './HeroDecorative.pug'
import './HeroDecorative.scss'
import heroDecorative from './../../data/heroDecorative.json'

export default class HeroDecorative {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(heroDecorative)
  }
}
