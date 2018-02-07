import template from './MainNav.pug'
import './MainNav.scss'
import { mainNav } from './../../data/home.json'

export default class MainNav {
  constructor (node) {
    console.log(mainNav.logo.img)
    this.node = node
    this.node.innerHTML = template(mainNav)
    this.eventButtonMenu()
  }

  eventButtonMenu () {
    console.log(this.node)
    const buttonMenu = this.node.querySelector('.button')
    console.log(buttonMenu)
    const mainNav = this.node.querySelector('.main-nav-menu')
    console.log(mainNav)
    buttonMenu.addEventListener('click', function () {
      mainNav.classList.toggle('main-nav-menu--opened')
    })
  }
}
