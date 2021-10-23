console.log('obj oriented js connected');

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

/* * * * * * * * * * * CLASS * * * * * * * * * * * */
class Pet {
    constructor() {
        this.happiness = Math.floor(Math.random() * 100);
        this.tummy = Math.floor(Math.random() * 100);
        this.energy = Math.floor(Math.random() * 100);
    };

    updateStats() {
        happyStat.innerText = this.happiness;
        tummyStat.innerText = this.tummy;
        energyStat.innerText = this.energy;
    };

    play() {
        buttonContainer.classList.add('disable-buttons');
        petContainer.classList.remove('pacing');
        petContainer.classList.add('center-pet');
        petGraphic.classList.add('playing');

        this.happiness += 20;
        this.energy -= 20;
        this.tummy -= 30;

        setTimeout(() => {
            petContainer.classList.remove('center-pet')
            petGraphic.classList.remove('playing');
            petContainer.classList.add('pacing');
            buttonContainer.classList.remove('disable-buttons');
        }, 7000);

        this.updateStats();
    };

    feed() {
        buttonContainer.classList.add('disable-buttons');
        petContainer.classList.remove('pacing');
        petContainer.classList.add('center-pet');
        petGraphic.classList.add('eating');

        if (this.tummy < 100) {
            console.log('feeding');
            this.tummy += 30;
            this.happiness += 10;
        }

        if (this.tummy > 100) {
            console.log('you overfed me');
            this.energy -= 60;
            this.happiness -= 30;
        }

        setTimeout(() => {
            petContainer.classList.remove('center-pet')
            petGraphic.classList.remove('eating');
            petContainer.classList.add('pacing')
            buttonContainer.classList.remove('disable-buttons');
        }, 5000);

        this.updateStats();
    };

    sleep() {
        buttonContainer.classList.add('disable-buttons');
        petContainer.classList.remove('pacing');
        petContainer.classList.add('center-pet');
        petGraphic.classList.add('sleeping');

        this.energy += 40;
        this.happiness += 5;
        this.tummy -= 20;

        setTimeout(() => {
            petContainer.classList.remove('center-pet');
            petGraphic.classList.remove('sleeping');
            petContainer.classList.add('pacing');
            buttonContainer.classList.remove('disable-buttons');
        }, 9000);

        this.updateStats();
    };
};

const pet = new Pet();
pet.updateStats();

/* * * * * * * * * * * EVENT LISTENERS * * * * * * * * * * * */

playButton.addEventListener('click', () => pet.play());
feedButton.addEventListener('click', () => pet.feed());
sleepButton.addEventListener('click', () => pet.sleep());