import './footer.css'; // only get the styles (w/o insertion it into the DOM)
import buttonStyles from './button.css'; // only get the styles (w/o insertion it into the DOM)
import nav from "./nav.js";
import {footer} from "./footer.js";
import {makeBtn} from './button.js'
import {styleButton} from './button-styles.js'
import imageUrl from './icon.jpg';
import makeImage from './image.js';
import Foo from './foo.ts';

// Foo.show(); // only works with TS loader


// this is usually abstracted with a loader
// custom HMR is it is not supported:
// if (hot.module.accepts()) {
//     // import('youFileToReload.ext'); // IT MUST BE DONE per module!
// }


console.log(nav(), footer, makeBtn('BTN one'));
console.log(nav(), footer, styleButton('cyan'));

const image = makeImage(imageUrl);
console.log(image);
const btnOne = makeBtn('BTN one')
btnOne.style = styleButton('cyan');
document.body.appendChild(btnOne);
document.body.appendChild(image);
document.body.appendChild(footer);