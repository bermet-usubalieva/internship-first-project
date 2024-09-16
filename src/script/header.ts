import { createButton } from "./button/headerButton";
import logo from '../assets/img/logo.png';
import { createNav } from "./nav";


export function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';

    const logoLink = document.createElement('a');
    logoLink.className = 'logoLink';
    logoLink.href = 'index.html';
    const logoImg = document.createElement('img');
    logoImg.className = 'logoImg';
    logoImg.src = logo;
    const logoText = document.createElement('p');
    logoText.className = 'logoText';
    logoText.textContent = 'logoipsum';

    //nav
    const nav = createNav()

    //buttnon
    const headerButton = createButton()

    const btn = document.createElement('button');
    btn.className = 'headerBurger';
    const headerSpan1 = document.createElement('span');
    headerSpan1.className = 'headerSpan1';
    const headerSpan2 = document.createElement('span');
    headerSpan2.className = 'headerSpan2';
    const headerSpan3 = document.createElement('span');
    headerSpan3.className = 'headerSpan3';

    btn.addEventListener('click', () => {
        header.classList.toggle('open')
    })

    document.addEventListener('click', (e) => {
        const isClickInsideMenu = header.contains(e.target as Node) || btn.contains(e.target as Node);
        if (!isClickInsideMenu) {
            header.classList.remove('open');
        }
    });


    btn.append(headerSpan1, headerSpan2, headerSpan3);

    logoLink.append(logoImg, logoText);
    header.append(logoLink, nav, headerButton, btn);

    return header;
}
