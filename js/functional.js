/* * * * * * * * * * INITALIZATION * * * * * * * * * */

console.log('functional js connected')
let hunger, neglect, sleepiness;
initialize();

/* * * * * * * * * CACHED ELEMENT REFERENCES * * * * * * * * */

const happyStat = document.querySelector('#happy');
const tummyStat = document.querySelector('#tummy');
const energyStat = document.querySelector('#energy');
const petContainer = document.querySelector('.pet-container');
const petGraphic = document.querySelector('.pet');
const buttonContainer = document.querySelector('.button-container');
const feedButton = document.querySelector('#feed');
const playButton = document.querySelector('#play');
const sleepButton = document.querySelector('#sleep');

/* * * * * * * * * * * EVENT LISTENERS * * * * * * * * * * * */

playButton.addEventListener('click', play);
feedButton.addEventListener('click', feed);
sleepButton.addEventListener('click', sleep);

/* * * * * * * * * * * * * FUNCTIONS * * * * * * * * * * * * */

function initialize() {
    happiness = Math.floor(Math.random() * 100);
    tummy = Math.floor(Math.random() * 100);
    energy = Math.floor(Math.random() * 100);
}

function updateStats() {
    happyStat.innerText = happiness;
    tummyStat.innerText = tummy;
    energyStat.innerText = energy;
}

function play() {
    buttonContainer.classList.add('disable-buttons');
    petContainer.classList.remove('pacing');
    petContainer.classList.add('center-pet');
    petGraphic.classList.add('playing');

    happiness += 20;
    energy -= 20;
    tummy -= 30;

    setTimeout(() => {
        petContainer.classList.remove('center-pet')
        petGraphic.classList.remove('playing');
        petContainer.classList.add('pacing')
        buttonContainer.classList.remove('disable-buttons');
    }, 7000);

    updateStats();
};

function feed() {
    if (tummy < 100) {
        buttonContainer.classList.add('disable-buttons');
        petContainer.classList.remove('pacing');
        petContainer.classList.add('center-pet');
        petGraphic.classList.add('eating');

        console.log('feeding');
        tummy += 30;
        happiness += 10;

        if (tummy > 100) {
            console.log('you overfed me');
            energy -= 60;
            happiness -= 30;
        };
    } else {
        console.log('not hungry!');
    }

    setTimeout(() => {
        petContainer.classList.remove('center-pet')
        petGraphic.classList.remove('eating');
        petContainer.classList.add('pacing')
        buttonContainer.classList.remove('disable-buttons');
    }, 5000);

    updateStats();
};

function sleep() {
    buttonContainer.classList.add('disable-buttons');
    petContainer.classList.remove('pacing');
    petContainer.classList.add('center-pet');
    petGraphic.classList.add('sleeping');

    energy += 40;
    happiness += 5;
    tummy -= 20;

    setTimeout(() => {
        petContainer.classList.remove('center-pet');
        petGraphic.classList.remove('sleeping');
        petContainer.classList.add('pacing');
        buttonContainer.classList.remove('disable-buttons');
    }, 9000);

    updateStats();
};