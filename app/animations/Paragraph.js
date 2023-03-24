/* eslint-disable space-before-function-paren */
import Animation from 'classes/Animation'
import GSAP from 'gsap'
import each from 'lodash/each'

import { split, calculate } from 'utils/text'

export default class Paragraph extends Animation {
  constructor({ element, elements }) {
    super({ element, elements })

    this.elementLinesSpans = split({
      element: this.element,
      append: true
    })
  }

  animateIn() {
    this.timelineIn = GSAP.timeline({
      delay: 0.5
    })

    this.timelineIn.set(this.element, {
      autoAlpha: 1
    })

    each(this.elementsLines, (line, index) => {
      this.timelineIn.fromTo(
        line,
        {
          autoAlpha: 0,
          y: '100%'
        },
        {
          autoAlpha: 1,
          delay: index * 0.2,
          duration: 1.5,
          y: '0%',
          ease: 'expo.out'
        },
        0
      )
    })
  }

  animateOut() {
    GSAP.set(this.element, {
      autoAlpha: 0
    })
  }

  onResize() {
    this.elementsLines = calculate(this.elementLinesSpans)
  }
}
