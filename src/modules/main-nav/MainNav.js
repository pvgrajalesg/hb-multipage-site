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
    const buttonMenu = this.node.querySelector('.main-nav-container__button-closed')
    const mainNav = this.node.querySelector('.main-nav-menu__list')
    const buttonCross = this.node.querySelector('.main-nav-container__button-closed--line')
    buttonMenu.addEventListener('click', function () {
      mainNav.classList.toggle('main-nav-menu__list--opened')
      buttonCross.classList.toggle('main-nav-container__button-closed--line')
      buttonCross.classList.toggle('main-nav-container__button-closed--line')
    })
  }

  eventOptionMenu () {
    const mainNav = this.node.querySelector('.main-nav-menu__list')
    mainNav.addEventListener('click', this.show.bind(this))
  }

  show(event){
    if (event.target.parentElement.className === 'main-nav-menu__list__item-dropdown__button') {
      const dropdownMenu = event.target.closest('.main-nav-menu__list__item').querySelector('.main-nav-menu__list__item-menu ')
      dropdownMenu.classList.toggle('main-nav-menu__list__item-dropdown--opened')
    }
  }
}
