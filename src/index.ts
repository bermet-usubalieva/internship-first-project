import './index.scss';
import { createHeader } from './components/header';
import { createMain } from './components/main';
import { createFooter } from './components/footer';

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
