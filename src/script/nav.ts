export function createNav() {
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

    nav.append(navUl);
    return nav
}