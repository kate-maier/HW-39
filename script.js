//Демонстрація різниці Screen Width/Screen Height та Screen Avail Width/Screen Avail Height

const showScreenSize = document.getElementById('showScreenSize');
const showPage = document.getElementById('showPage');
const showPageAvailSize = document.getElementById('showPageAvailSize');

showScreenSize.addEventListener('click', () => {
    const screenSize = document.createElement('p');
    screenSize.textContent = 'Розмір Вашого екрану: ' + window.screen.width + 'x' + window.screen.height;
    const screenAvailSize = document.createElement('p');
    screenAvailSize.textContent = 'Доступний розмір Вашого екрану: ' + window.screen.availWidth + 'x' + window.screen.availHeight;

    const container = document.querySelector('body');
    container.appendChild(screenSize);
    container.appendChild(screenAvailSize);

})

let halfAvailHeight = window.screen.availHeight / 2;
let halfHeight = window.screen.height / 2;
let halfAvailWidth = window.screen.availWidth / 2;
let halfWidth = window.screen.width / 2;

showPage.addEventListener('click', () => {
    window.open('https://kyiv.ithillel.ua/', 'hillel', `width=${halfWidth}, height=${halfHeight}`);
})

showPageAvailSize.addEventListener('click', () => {
    window.open('https://kyiv.ithillel.ua/', 'hillel', `width=${halfAvailWidth}, height=${halfAvailHeight}`);
})
