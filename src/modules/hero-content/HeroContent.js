import template from './HeroContent.pug'
import './HeroContent.scss'
import {heroContent} from './../../data/home.json'
import Breakpoint from '../../shared/breakpoint'

export default class HeroContent {
  constructor (node) {
    this.node = node
    const contentHero = Object.assign({}, heroContent, Breakpoint.dataBreakpoint())
    this.node.innerHTML = template(contentHero)
  }
}
