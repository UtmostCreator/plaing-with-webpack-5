import {red, blue} from './button-styles.js'

const top = document.createElement('div');
top.innerHTML = "Top footer";
top.style = red;
const bottom = document.createElement('div');
bottom.innerHTML = "Bottom footer";
bottom.style = blue;
const footer = document.createElement('div');
footer.appendChild(top);
footer.appendChild(bottom);


export {top, bottom, footer};
// const top = "top";
// const bottom = "bottom";


// export.top = top;
// export.bottom = bottom;