import './footer.css'; // only get the styles (w/o insertion it into the DOM)
import buttonStyles from './button.css'; // only get the styles (w/o insertion it into the DOM)
import nav from "./nav.js";
import {footer} from "./footer.js";
import {makeBtn} from './button.js'
import {styleButton} from './button-styles.js'

console.log(nav(), footer, makeBtn('BTN one'));
console.log(nav(), footer, styleButton('cyan'));

const btnOne = makeBtn('BTN one')
btnOne.style = styleButton('cyan');
document.body.appendChild(btnOne);
document.body.appendChild(footer);