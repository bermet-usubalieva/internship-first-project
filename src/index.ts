import './style/style.scss';
import './style/media.scss';
import { createHeader } from './script/header';
import { createMain } from './script/main';
import { createFooter } from './script/footer';

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
