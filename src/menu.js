import omletImg from './images/omlet.jpg';
import syrnykiImg from './images/syrnyki.jpg';
import blinchiImg from './images/blinchi.jpg';
import shorpoImg from './images/shorpo-govyadina.jpg';
import mastavaImg from './images/mastava.jpg';
import vegetarianImg from './images/vegetarian.jpg';
import meatballsImg from './images/metballs.jpg';
import plovImg from './images/plov-prazdnichnyj.jpg';
import kuurdakImg from './images/kuurdak.jpg';
import mantyImg from './images/manty-seasonal.jpg';
import narynImg from './images/naryn.jpg';
import boorsokiImg from './images/boorsoki.jpg';
import kattamaImg from './images/kattama.jpg';
import samsaImg from './images/samsa.alat.jpg';

const loadMenu = function () {
    const content = document.getElementById('content');
    content.innerHTML = "";
    const newHeading = document.createElement('h1');
    const textNode = document.createTextNode('Our kyrgyz dishes');
    newHeading.appendChild(textNode);
    content.appendChild(newHeading);
    content.style.height = window.innerHeight + 'px';
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';
    content.appendChild(menuContainer);

    class Dishes {
        constructor(name, price, about) {
            this.name = name;
            this.price = price;
            this.about = about;
        }

    }

    class Catalog {
        constructor() {
            this.menu = [];
        }

        addDishesToCatalog(name, price, about) {
            this.menu.push(new Dishes(name, price, about));
        }
        displayMenu() {
            const divContainer = document.getElementById("menu-container");
            divContainer.innerHTML = "";
            this.menu.forEach((dishes) => {
                let divCard = document.createElement("div");
                divCard.className = "menu-card";
                let divName = document.createElement("h3");
                divName.textContent = dishes.name;
                let divPrice = document.createElement("p");
                divPrice.textContent = `Price: ${dishes.price}`;
                let divAbout = document.createElement("img");
                divAbout.src = dishes.about;
                divCard.appendChild(divName);
                divCard.appendChild(divPrice);
                divCard.appendChild(divAbout);
                divContainer.appendChild(divCard);
            });
        };
    }

    const myCatalog = new Catalog();
    myCatalog.addDishesToCatalog("Omlet", "220 Сом", omletImg);
    myCatalog.addDishesToCatalog("Syrnyki", "320 Сом", syrnykiImg);
    myCatalog.addDishesToCatalog("Blinchi", "250 Сом", blinchiImg);
    myCatalog.addDishesToCatalog("Shorpo", "340 Сом", shorpoImg);
    myCatalog.addDishesToCatalog("Mastava", "310 Сом", mastavaImg);
    myCatalog.addDishesToCatalog("Vegetarian", "250 Сом", vegetarianImg);
    myCatalog.addDishesToCatalog("Meatballs", "310 Сом", meatballsImg);
    myCatalog.addDishesToCatalog("Plov", "515 Сом", plovImg);
    myCatalog.addDishesToCatalog("Kuurdak", "715 Сом", kuurdakImg);
    myCatalog.addDishesToCatalog("Manty", "385 Сом", mantyImg);
    myCatalog.addDishesToCatalog("Naryn", "610 Сом", narynImg);
    myCatalog.addDishesToCatalog("Boorsoki", "110 Сом", boorsokiImg);
    myCatalog.addDishesToCatalog("Kattama", "185 Сом", kattamaImg);
    myCatalog.addDishesToCatalog("Samsa", "135 Сом", samsaImg);
    myCatalog.displayMenu();
};
export { loadMenu };