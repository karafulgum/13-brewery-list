export default class BreweryView  {
  constructor(el, model)  {
    this.el = el;
    this.model = model;
  }
  render() {
    this.model.forEach((result) => {

      grid__item.classList.add('result');
      grid__item.innerHTML = `
      <div class="grid__info"></div>`;

      this.el.querySelector('.grid__item--title')innerText = this.data.name;
      this.el.querySelector('.grid__item--img')innerText = this.data.images.icon;
      this.el.querySelector('.grid__item--subtitile')innerText = this.data.established;

      this.el.appenChild(grid__item);
    });
  }
}
