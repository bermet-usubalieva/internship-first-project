import { createHeader } from './header.js';
import { createMain } from './main.js';
import { createFooter } from './footer.js';

const container = document.createElement('div');
container.className = 'container';

const header = createHeader();
const main = createMain();
const footer = createFooter();

container.append(header, main, footer);
document.body.append(container);
