import Popover from './js/popover';
import './styles/style.css';

const button = document.getElementById('popover-btn');
const popover = new Popover(button, 'Popover title', 'And here\'s some amazing content. It\'s very engaging. Right?');
popover();
