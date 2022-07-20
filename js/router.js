import { Styles } from "./styles.js";
const styles = new Styles();

styles.addBackground("/", "./images/mountains-universe-1.png")
styles.addBackground("/universe", "./images/mountains-universe-2.png")
styles.addBackground("/exploration", "./images/mountains-universe-3.png")


export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });

      styles.changeBackground(pathname);
  }
}
