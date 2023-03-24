import Page from 'classes/Page';

export default class Home extends Page {
  constructor() {
    super({
      id: 'home',
      element: '.home',
      elements: {
        time: '.home__info__time',
        wrapper: '.home__wrapper',
      },
    });

    this.create();
    this.updateTime();
  }

  updateTime() {
    let options = {
      timeZone: 'Europe/Belgrade',
      hour: 'numeric',
      minute: 'numeric',
    };

    this.formatter = new Intl.DateTimeFormat([], options);

    if (this.elements.time)
      this.elements.time.innerHTML = `${this.formatter.format(new Date())}`;
  }
}
