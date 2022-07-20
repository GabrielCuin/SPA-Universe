export class Styles {
  pageBackground = {};
  allButtons = document.querySelectorAll("a");

  addBackground(path, image) {
    this.pageBackground[path] = image;
  }

  changeBackground(path) {
    const clickedButton = document.querySelector(`a[href="${path}"]`);
    for (const button of this.allButtons) {
      button.classList.remove("selected");
    }
    clickedButton.classList.toggle("selected");

    const body = document.body;
    body.style.backgroundImage = `url(${this.pageBackground[path]})`;
  }
}
