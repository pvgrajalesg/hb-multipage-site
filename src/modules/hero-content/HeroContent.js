import template from './HeroContent.pug'
import './HeroContent.scss'
import heroContent from './../../data/heroContent.json'

export default class HeroContent {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(heroContent)
  }
}
