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

      grid__item.querySelector('')innerText = result.grid__info;
      // grid__item.querySelector('')innerText = result.
      // grid__item.querySelector('')innerText = result.

      this.el.appenChild(grid__item);
    });
  }
}
