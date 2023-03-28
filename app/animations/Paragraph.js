/* eslint-disable space-before-function-paren */
import Animation from 'classes/Animation';
import GSAP from 'gsap';
import each from 'lodash/each';

import { split, calculate } from 'utils/text';

export default class Paragraph extends Animation {
  constructor({ element, elements }) {
    super({ element, elements });

    this.elementLinesSpans = split({
      element: this.element,
      append: true,
      // expression: '<br>',
    });
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
          autoAlpha: 0,
          y: '100%',
        },
        {
          autoAlpha: 1,
          duration: 1,
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
