import gsap from 'gsap';
import each from 'lodash/each';
import Prefix from 'prefix';
import normalizeWheel from 'normalize-wheel';

export default class Page {
  constructor({ id, element, elements }) {
    this.id = id;

    this.selector = element;
    this.selectorChildren = {
      ...elements,
    };

    this.transformPrefix = Prefix('transform');

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
  }

  // Animations
  show() {
    return new Promise((resolve) => {
      this.animationIn = gsap.timeline();

      this.animationIn.fromTo(
        this.element,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          onComplete: resolve,
        }
      );

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

    console.log(this.scroll.target);
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
      console.log(this.elements.wrapper.clientHeight);

      this.scroll.limit =
        this.elements.wrapper.clientHeight - window.innerHeight;
    }
  }

  addEventListeners() {
    window.addEventListener('mousewheel', this.onMouseWheelEvent);
  }

  removeEventListeners() {
    window.removeEventListener('mousewheel', this.onMouseWheelEvent);
  }
}
