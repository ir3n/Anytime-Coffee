import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";

class SmoothScrolling {
  constructor() {
    this.links = $("a");
    this.addSmoothScroll();
  }
  addSmoothScroll() {
    this.links.smoothScroll();
  }
}

export default SmoothScrolling;
