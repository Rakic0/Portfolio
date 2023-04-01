import Page from 'classes/Page';

import each from 'lodash/each';

export default class Project extends Page {
  constructor() {
    super({
      id: 'project',

      element: '.project',
      elements: {
        wrapper: '.project__wrapper',
        accordionButtons: '.project__accordion__button',
        accordion: '.project__accordion',
      },
    });

    this.create();
    this.accordionListener();
  }

  onClick(e) {
    if (!e.target.classList.contains('project__accordion__header')) {
      return;
    }
  }

  accordionListener() {
    this.elements.accordion.addEventListener('click', this.onClick);
  }
}
