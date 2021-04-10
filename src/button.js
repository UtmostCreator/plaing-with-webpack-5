// return btn and label
const makeBtn = btnName => {
    const buttonLabel = `Button ${btnName}`;

    let btn = document.createElement('button');
    btn.innerHTML = buttonLabel;
    return btn;
};

export {makeBtn};