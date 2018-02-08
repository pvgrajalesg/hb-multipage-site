import template from './MainNav.pug'
import './MainNav.scss'
import { mainNav } from './../../data/home.json'

export default class MainNav {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(mainNav)
    this.eventButtonMenu()
  }

  eventButtonMenu () {
    const buttonMenu = this.node.querySelector('.button-closed')
    const mainNav = this.node.querySelector('.main-nav-menu')
    const buttonCross = this.node.querySelector('.button-opened')
    console.log(mainNav)
    buttonMenu.addEventListener('click', function () {
      mainNav.classList.toggle('main-nav-menu--opened')
      buttonCross.classList.toggle('button-opened--js')
    })

    buttonCross.addEventListener('click', function () {
      mainNav.classList.toggle('main-nav-menu--opened')
      buttonCross.classList.toggle('button-opened--js')
    })
  }
}
