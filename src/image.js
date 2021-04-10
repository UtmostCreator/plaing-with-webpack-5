const makeImage = (url, size = 10) => {
    let image = document.createElement('img');
    image.src = url;
    image.style = `max-height: ${size}rem;`

    return image;
}

export default makeImage;