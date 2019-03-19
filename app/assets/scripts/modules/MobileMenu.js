import $ from "jquery";

class MobileMenu {
  constructor() {
    this.navbar = $("nav");
    this.menuIcon = $("#menu-button");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuIcon.toggleClass("rotate");
    this.menuIcon.toggleClass("fa-times");
    this.navbar.toggleClass("show-nav");
  }
}

export default MobileMenu;
