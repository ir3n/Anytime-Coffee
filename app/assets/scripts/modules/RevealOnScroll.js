import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = $(".card1-of-3");
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    this.itemsToReveal.each(function() {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: "70%"
      });
    });
  }
}

export default RevealOnScroll;
