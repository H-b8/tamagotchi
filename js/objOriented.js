console.log('obj oriented js connected');

/* * * * * * * * * CACHED ELEMENT REFERENCES * * * * * * * * */

const happyStat = document.querySelector('#happy');
const tummyStat = document.querySelector('#tummy');
const energyStat = document.querySelector('#energy');
const petContainer = document.querySelector('.pet-container');
const petGraphic = document.querySelector('.pet');
const buttonContainer = document.querySelector('.button-container');
const feedButton = document.querySelector('#feed');
const feedText = document.querySelector('#feed-text');
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
        if (this.happiness > 100) {
            this.happiness = 100;
        }

        if (this.energy > 100) {
            this.happiness = 100;
        }

        if (this.tummy > 99) {
            feedText.innerText = '';
            feedButton.style.backgroundColor = 'rgb(140, 123, 252, 0.7)';
        } else {
            feedText.innerText = 'FEED';
            feedButton.style.backgroundColor = 'rgb(140, 123, 252)';
        }

        happyStat.innerText = this.happiness;
        tummyStat.innerText = this.tummy;
        energyStat.innerText = this.energy;
    };

    play() {
        buttonContainer.classList.add('disable-buttons');
        petContainer.classList.remove('pacing');
        petContainer.classList.add('center-pet');
        petGraphic.classList.add('playing');

        this.happiness += Math.floor(Math.random() * 50);
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
        if (this.tummy < 100) {
            buttonContainer.classList.add('disable-buttons');
            petContainer.classList.remove('pacing');
            petContainer.classList.add('center-pet');
            petGraphic.classList.add('eating');

            this.tummy += 30;
            this.energy += 10;
            this.happiness += Math.floor(Math.random() * 10);

            if (this.tummy > 100) {
                console.log('you overfed me!');
                this.energy -= 60;
                this.happiness -= 30;
            };

            setTimeout(() => {
                petContainer.classList.remove('center-pet')
                petGraphic.classList.remove('eating');
                petContainer.classList.add('pacing');
                buttonContainer.classList.remove('disable-buttons');
            }, 5000);

            this.updateStats();
        };
    };

    sleep() {
        buttonContainer.classList.add('disable-buttons');
        petContainer.classList.remove('pacing');
        petContainer.classList.add('center-pet');
        petGraphic.classList.add('sleeping');

        this.energy += Math.floor(Math.random() * 40);
        this.happiness += Math.floor(Math.random() * 10);
        this.tummy -= Math.floor(Math.random() * 20);

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