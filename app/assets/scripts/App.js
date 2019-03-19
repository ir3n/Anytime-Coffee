import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import SmoothScrolling from "./modules/SmoothScrolling";
import $ from "jquery";

const mobileMenu = new MobileMenu();
new RevealOnScroll($(".card1-of-3"), "60%");
new RevealOnScroll($(".show-later"), "80%");

const stickyHeader = new StickyHeader();
const smoothScrolling = new SmoothScrolling();
