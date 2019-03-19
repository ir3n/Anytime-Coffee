import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
  constructor() {
    this.header = $("header");
    this.triggerElement = $(".hero-text");
    this.createHeaderWaypoint();
  }
  createHeaderWaypoint() {
    let that = this;
    new Waypoint({
      element: that.triggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.header.addClass("sticky-header");
        } else {
          that.header.removeClass("sticky-header");
        }
      },
      offset: "80px"
    });
  }
}

export default StickyHeader;
