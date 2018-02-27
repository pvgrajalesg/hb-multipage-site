import template from './HeroDecorative.pug'
import './HeroDecorative.scss'
import {heroDecorative} from './../../data/home.json'
import Breakpoint from '../../shared/breakpoint'

export default class HeroDecorative {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(heroDecorative)
    this.divImage = node.querySelector('.hero-decorative__image')
    this.sizeImage = 0
    this.changeSizeViewport()
    window.addEventListener('resize', this.changeSizeViewport.bind(this))
  }

  setSizeBackground () {
    const breakpoint = Breakpoint.dataBreakpoint()
    if (breakpoint.breakpoint.small.maxWidth > window.innerWidth) {
      this.divImage.style.backgroundImage = `url(${heroDecorative.images.small.url})`
      this.sizeImage = breakpoint.breakpoint.small.maxWidth
    } else if (breakpoint.breakpoint.medium.maxWidth > window.innerWidth) {
      this.divImage.style.backgroundImage = `url(${heroDecorative.images.medium.url})`
      this.sizeImage = breakpoint.breakpoint.medium.maxWidth
    } else {
      this.divImage.style.backgroundImage = `url(${heroDecorative.images.large.url})`
      this.sizeImage = breakpoint.breakpoint.large.maxWidth
    }
  }

  changeSizeViewport () {
    const sizeScreen = window.screen.width
    if (sizeScreen > this.sizeImage) {
      this.setSizeBackground()
    }
  }
}
