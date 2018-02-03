import template from './MainNav.pug'
import './MainNav.scss'
import { mainNav } from './../../../data/home.json'

export default class MainNav {
  constructor (node) {
    console.log(mainNav.logo.img)
    this.node = node
    this.node.innerHTML = template(mainNav)
  }
}
