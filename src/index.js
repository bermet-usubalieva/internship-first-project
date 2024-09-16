import './style/style.css';
import './style/media.css';
import { createHeader } from './script/header.js';
import { createMain } from './script/main.js';
import { createFooter } from './script/footer.js';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

function createSection() {
    const header = createHeader();
    const main = createMain();
    const footer = createFooter();

    wrapper.append(header, main, footer);
}
createSection()
document.body.append(wrapper);
