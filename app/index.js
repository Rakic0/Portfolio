import Home from 'pages/Home';

import Project from 'pages/Project';
import Preloader from 'components/Preloader';

import each from 'lodash/each';

class App {
  constructor() {
    this.createContent();
    this.createPreloader();
    this.createPages();

    this.addEventListeners();
    this.addLinkListeners();

    this.update();
  }

  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.once('completed', this.onPreloaded.bind(this));
  }

  createContent() {
    this.content = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  createPages() {
    this.pages = {
      home: new Home(),
      project: new Project(),
    };

    this.page = this.pages[this.template];
    this.page.create();
    this.page.show();
  }

  onPreloaded() {
    this.onResize();
    this.preloader.destroy();
  }

  onPopState() {
    this.onChange({ url: window.location.pathname, push: false });
  }

  async onChange({ url, push = true }) {
    await this.page.hide();

    const request = await window.fetch(url);

    if (request.status === 200) {
      const html = await request.text();
      const div = document.createElement('div');

      if (push) {
        window.history.pushState({}, '', url);
      }

      div.innerHTML = html;

      const divContent = div.querySelector('.content');

      this.template = divContent.getAttribute('data-template');

      this.content.setAttribute('data-template', this.template);
      this.content.innerHTML = divContent.innerHTML;

      this.page = this.pages[this.template];

      this.page.create();
      this.page.onResize();
      this.page.show();
    } else {
      console.error('Error');
    }
  }

  onResize() {
    if (this.page && this.page.onResize) {
      this.page.onResize();
    }
  }

  /**
   * Loop
   */
  update() {
    if (this.page && this.page.update) {
      this.page.update();
    }

    if (this.page && this.page.updateTime) {
      this.page.updateTime();
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  /**
   * Listeners
   */
  addEventListeners() {
    window.addEventListener('popstate', this.onPopState.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
  }

  addLinkListeners() {
    const links = document.querySelectorAll(
      '.home__project__explore--link, .home__project__video__link'
    );

    each(links, (link) => {
      link.onclick = (e) => {
        e.preventDefault();

        const { href } = link;

        this.onChange({ url: href });
      };
    });
  }
}

new App();
