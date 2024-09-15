import { createButton } from "./button/headerButton.js";
export function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';

    const logoLink = document.createElement('a');
    logoLink.className = 'logoLink';
    logoLink.href = 'index.html';
    const logoImg = document.createElement('img');
    logoImg.className = 'logoImg';
    logoImg.src = '../assets/img/logo.png';
    const logoText = document.createElement('p');
    logoText.className = 'logoText';
    logoText.textContent = 'logoipsum';

    const nav = document.createElement('nav');
    nav.className = 'nav';
    const navUl = document.createElement('ul');
    navUl.className = 'navUl';
    const items = ['Home', 'Features', 'Pricing', 'Blog'];

    items.forEach(text => {
        const menuLi = document.createElement('li');
        menuLi.classList.add('menuLi');
        const menuItem = document.createElement('a');
        menuItem.classList.add('menuItem');
        menuItem.href = '';
        menuItem.textContent = text;

        menuLi.appendChild(menuItem);
        navUl.appendChild(menuLi);
    });

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

    btn.append(headerSpan1, headerSpan2, headerSpan3);
    nav.append(navUl);
    logoLink.append(logoImg, logoText);
    header.append(logoLink, nav, headerButton, btn);

    return header;
}
