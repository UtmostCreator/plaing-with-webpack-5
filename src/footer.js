// import css from './footer.css'; // only get the styles (w/o insertion it into the DOM)
import {red, blue} from './button-styles.js'

// console.log(css); // array with 0 - path to file (metadata), 1 - styles string

const top = document.createElement('div');
top.innerHTML = "Top footer";
top.style = red;
const bottom = document.createElement('div');
bottom.innerHTML = "Bottom footer";
bottom.style = blue;
const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);


export {top, bottom, footer};
// const top = "top";
// const bottom = "bottom";


// export.top = top;
// export.bottom = bottom;