import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

document.querySelector('.burger').addEventListener('click', ()=> {
    document.querySelector('.menu__body').classList.toggle('opened');
    event.target.classList.toggle('fa-bars');
    event.target.classList.toggle('fa-times');
})