import template from './MainNav.pug'
import './MainNav.scss'
import { mainNav } from './../../data/home.json'

export default class MainNav {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(mainNav)
    this.eventButtonMenu()
    this.eventOptionMenu()
  }

  eventButtonMenu () {
    const buttonMenu = this.node.querySelector('.button-closed')
    const mainNav = this.node.querySelector('.main-nav-menu')
    const buttonCross = this.node.querySelector('.button-closed-line')
    console.log(mainNav)
    buttonMenu.addEventListener('click', function () {
      mainNav.classList.toggle('main-nav-menu--opened')
      buttonCross.classList.toggle('button-closed-line')
      buttonCross.classList.toggle('button-closed-cross')
    })
  }

  eventOptionMenu () {
    const mainNav = this.node.querySelector('.main-nav-menu')
    mainNav.addEventListener('click', this.show.bind(this))
  }

  show(event){
    if (event.target.parentElement.className === 'item-dropdown__button') {
      const dropdownMenu = event.target.parentElement.parentElement.parentElement.querySelector('.item-dropdown__menu')
      dropdownMenu.classList.toggle('item-dropdown--opened')
    }
  }
}
