/* eslint-disable space-before-function-paren */
import Animation from 'classes/Animation';
import GSAP from 'gsap';
import each from 'lodash/each';

import { split, calculate } from 'utils/text';

export default class Title extends Animation {
  constructor({ element, elements }) {
    super({ element, elements });

    split({
      element: this.element,
      append: true,
    });

    split({
      element: this.element,
      append: true,
    });

    this.elementLinesSpans = this.element.querySelectorAll('span span');
  }

  animateIn() {
    this.timelineIn = GSAP.timeline({
      delay: 0.5,
    });

    this.timelineIn.set(this.element, {
      autoAlpha: 1,
    });

    each(this.elementLinesSpans, (line, index) => {
      this.timelineIn.fromTo(
        line,
        {
          y: '100%',
        },
        {
          duration: 1.5,
          delay: index * 0.01,
          y: '0%',
          ease: 'expo.out',
        },
        0
      );
    });
  }

  animateOut() {
    GSAP.set(this.element, {
      autoAlpha: 0,
    });
  }

  onResize() {
    this.elementsLines = calculate(this.elementLinesSpans);
  }
}
