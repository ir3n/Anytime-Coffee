import $ from "jquery";

class MobileMenu {
  constructor() {
    this.navbar = $("nav");
    this.menuIcon = $("#menu-button");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    //1. na ginetai x
    this.menuIcon.toggleClass("fa-times");

    //2. na emfanizei menu
    this.navbar.toggleClass("visible");
    // this.menuContent.toggleClass("site-header__menu-content--is-visible");
    // this.siteHeader.toggleClass("site-header--is-expanded");
    // this.menuIcon.toggleClass("site-header__menu-icon--close-x")
  }
}

export default MobileMenu;
