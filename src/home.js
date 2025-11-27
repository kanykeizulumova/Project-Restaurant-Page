
import homeImgSrc from './images/home.png';

const loadHome = function () {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const newParagraph = document.createElement('p');
    const textNode = document.createTextNode('Welcome to Yurt Cafe.');
    textNode.id = 'home-text';
    newParagraph.appendChild(textNode);
    content.appendChild(newParagraph);

    content.style.minHeight = window.innerHeight + 'px';

    const homeImg = document.createElement('img');

    homeImg.src = homeImgSrc;

    content.appendChild(homeImg);

    homeImg.style.width = '100%';
    homeImg.style.height = '100%';
    homeImg.style.objectFit = 'cover';
    homeImg.style.objectPosition = 'center';

    const homeText = document.createElement('p');
    const homeTextNode = document.createTextNode('We serve our food with love and care.');
    homeText.appendChild(homeTextNode);
    content.appendChild(homeText);

    const aboutContainer = document.createElement('div');
    aboutContainer.id = 'about-container';
    content.appendChild(aboutContainer);

    const aboutText = document.createElement('p');
    const aboutTextNode = document.createTextNode('Come visit us to enjoy kyrgyz culture ');
    aboutText.appendChild(aboutTextNode);
    aboutContainer.appendChild(aboutText);
};

export { loadHome };