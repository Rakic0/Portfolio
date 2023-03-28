/* eslint-disable space-before-function-paren */
import Component from 'classes/Component'

export default class Animation extends Component {
  constructor({ element, elements }) {
    super({ element, elements })

    this.createObserver()

    this.animateOut()
  }

  createObserver() {
    this.observer = new window.IntersectionObserver((enteries) => {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateIn()
        } else {
          this.animateOut()
        }
      })
    })

    this.observer.observe(this.element)
  }

  animateIn() {}

  animateOut() {}
}
