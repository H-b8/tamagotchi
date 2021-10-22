/* * * * * * * * * * INITALIZATION * * * * * * * * * */

console.log('main.js connected')
let hunger, neglect, sleepiness;
initialize();

/* * * * * * * * * CACHED ELEMENT REFERENCES * * * * * * * * */

const feedButton = document.querySelector('#feed');
const playButton = document.querySelector('#play');
const sleepButton = document.querySelector('#sleep');

/* * * * * * * * * * * EVENT LISTENERS * * * * * * * * * * * */

feedButton.addEventListener('click', decHunger);
playButton.addEventListener('click', decNeglect);
sleepButton.addEventListener('click', decSleepiness);

/* * * * * * * * * * * * * FUNCTIONS * * * * * * * * * * * * */

function initialize() {
    hunger = 50;
    neglect = 50;
    sleepiness = 50;
    console.log(hunger, neglect, sleepiness)
}

function decHunger() {
    hunger -= 20;
    console.log(hunger, neglect, sleepiness)
};

function decNeglect() {
    neglect -= 75;
    console.log(hunger, neglect, sleepiness)
};

function decSleepiness() {
    sleepiness -= 50;
    console.log(hunger, neglect, sleepiness)
};