import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
  constructor() {
    this.header = $("header");
    //this.createHeaderWaypoint();
    this.pageSections = $("section");
    this.headerLinks = $("nav a");
    //this.createSectionWaypoints();
  }
}

export default StickyHeader;
