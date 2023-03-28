import gsap from 'gsap';

import Component from 'classes/Component';

import each from 'lodash/each';

export default class Preloader extends Component {
  constructor() {
    super({
      element: '.preloader',
      elements: {
        number: '.preloader__number',
        images: document.querySelectorAll('img'),
      },
    });

    this.length = 0;

    this.createLoader();
  }

  createLoader() {
    if (!this.elements.images.length) {
      this.onLoaded();
      this.elements.number.textContent = '100%';
    }

    each(this.elements.images, (el) => {
      el.onload = (_) => this.onAssetLoaded(el);
      el.src = el.getAttribute('data-src');
    });
  }

  onAssetLoaded(image) {
    this.length += 1;

    const percent = this.length / this.elements.images.length;

    this.elements.number.innerHTML = `${Math.round(percent * 100)}%`;

    if (percent === 1) {
      this.onLoaded();
    }
  }

  onLoaded() {
    return new Promise((resolve) => {
      this.animateOut = gsap.timeline({
        delay: 1,
      });

      this.animateOut.to(this.element, {
        autoAlpha: 0,
      });

      this.animateOut.call((_) => {
        this.emit('completed');
      });
    });
  }

  destroy() {
    this.element.parentNode.removeChild(this.element);
  }
}
