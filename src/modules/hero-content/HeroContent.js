import template from './HeroContent.pug'
import './HeroContent.scss'
import heroContent from './../../data/home.json'

export default class HeroContent {
  constructor (node) {
    this.node = node
    this.dataHero()
    console.log(heroContent)
    this.node.innerHTML = template(heroContent)
  }

  dataHero () {
    heroContent.push({'size': '639px'})
  }
}
