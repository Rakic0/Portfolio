import Page from 'classes/Page';

import each from 'lodash/each';

export default class Project extends Page {
  constructor() {
    super({
      id: 'project',

      element: '.project',
      elements: {
        wrapper: '.project__wrapper',
      },
    });
  }
}
