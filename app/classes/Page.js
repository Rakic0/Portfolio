import gsap from 'gsap';
import each from 'lodash/each';
import map from 'lodash/map';
import normalizeWheel from 'normalize-wheel';
import Prefix from 'prefix';

import Title from 'animations/Title';
import Paragraph from 'animations/Paragraph';
import Label from 'animations/Label';
import Highlight from 'animations/Highlight';

import AsyncLoad from 'classes/AsyncLoad';

export default class Page {
  constructor({ id, element, elements }) {
    this.id = id;

    this.selector = element;
    this.selectorChildren = {
      ...elements,

      animationsTitles: '[data-animation="title"]',
      animationsParagraphs: '[data-animation="paragraph"]',
      animationsLabels: '[data-animation="label"]',
      animationsHighlights: '[data-animation="highlight"]',

      preloaders: '[data-src]',
    };

    this.transformPrefix = Prefix('transform');
    this.scrollOffset = 0;

    this.onMouseWheelEvent = this.onMouseWheel.bind(this);
  }

  create() {
    this.element = document.querySelector(this.selector);
    this.elements = {};

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0,
    };

    each(this.selectorChildren, (entry, key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList ||
        Array.isArray(entry)
      ) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);

        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
    });

    this.createAnimations();
    this.createPreloader();
  }

  createPreloader() {
    this.preloaders = map(this.elements.preloaders, (element) => {
      return new AsyncLoad({ element });
    });
  }

  createAnimations() {
    this.animations = [];

    // Highlight
    this.animationsHighlights = map(
      this.elements.animationsHighlights,
      (element) => {
        return new Highlight({
          element,
        });
      }
    );

    this.animations.push(...this.animationsHighlights);

    // Titles
    this.animationsTitles = map(this.elements.animationsTitles, (element) => {
      return new Title({
        element,
      });
    });

    this.animations.push(...this.animationsTitles);

    // Paragraph
    this.animationsParagraphs = map(
      this.elements.animationsParagraphs,
      (element) => {
        return new Paragraph({
          element,
        });
      }
    );

    this.animations.push(...this.animationsParagraphs);

    // Labels
    this.animationsLabels = map(this.elements.animationsLabels, (element) => {
      return new Label({
        element,
      });
    });

    this.animations.push(...this.animationsLabels);
  }

  // Animations
  show(animation) {
    return new Promise((resolve) => {
      this.animationIn = gsap.timeline();

      if (animation) {
        this.animationIn = animation;
      } else {
        this.animationIn = gsap.timeline();
        this.animationIn.fromTo(
          this.element,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        );
      }

      this.animationIn.call((_) => {
        this.addEventListeners();
        resolve();
      });
    });
  }

  hide() {
    return new Promise((resolve) => {
      this.removeEventListeners();

      this.animationOut = gsap.timeline();

      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve,
      });
    });
  }

  onMouseWheel(e) {
    const { pixelY } = normalizeWheel(e);
    this.scroll.target += pixelY;
  }

  update() {
    this.scroll.target = gsap.utils.clamp(
      0,
      this.scroll.limit,
      this.scroll.target
    );

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0;
    }

    this.scroll.current = gsap.utils.interpolate(
      this.scroll.current,
      this.scroll.target,
      0.1
    );

    if (this.elements.wrapper) {
      this.elements.wrapper.style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`; //prettier-ignore
    }
  }

  onResize() {
    if (this.elements.wrapper) {
      this.scroll.limit =
        this.elements.wrapper.clientHeight - window.innerHeight;
    }

    each(this.animations, (animation) => animation.onResize());
  }

  addEventListeners() {
    window.addEventListener('wheel', this.onMouseWheelEvent);
  }

  removeEventListeners() {
    window.removeEventListener('wheel', this.onMouseWheelEvent);
  }
}
