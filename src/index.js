import './index.scss'
import MainNav from './modules/main-nav/MainNav.js'
import HeroContent from './modules/hero-content/HeroContent.js'
import HeroDecorative from './modules/hero-decorative/HeroDecorative.js'

/* eslint-disable */
new MainNav(document.querySelector('.main'))
new HeroContent(document.querySelector('.hero-content'))
new HeroDecorative(document.querySelector('.hero-decorative'))
