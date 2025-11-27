import { loadHome } from './home.js'
import { loadMenu } from './menu.js'
import { loadContacts } from './contacts.js'
import './styles.css';
loadHome();
const homeButton = document.getElementById('home-btn');
homeButton.addEventListener('click', loadHome);
const menuButton = document.getElementById('menu-btn');
menuButton.addEventListener('click', loadMenu);
const contactsButton = document.getElementById('contact-btn');
contactsButton.addEventListener('click', loadContacts);