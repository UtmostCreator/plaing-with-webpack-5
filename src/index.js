import nav from "./nav.js";
import {top, bottom} from "./footer.js";
import {makeBtn} from './button.js'
import {styleButton} from './button-styles.js'

console.log(nav(), top, bottom, makeBtn('BTN one'));
console.log(nav(), top, bottom, styleButton('Any Button'));