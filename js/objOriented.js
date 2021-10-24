console.log('obj oriented js connected');

/* * * * * * * * * CACHED ELEMENT REFERENCES * * * * * * * * */

const time = document.querySelector('#clock')
const happyStat = document.querySelector('#happy');
const tummyStat = document.querySelector('#tummy');
const energyStat = document.querySelector('#energy');

const petContainer = document.querySelector('.pet-container');
const petGraphic = document.querySelector('.pet');

const buttonContainer = document.querySelector('.button-container');
const feedButton = document.querySelector('#feed');
const feedText = document.querySelector('#feed-text');
const playButton = document.querySelector('#play');
const playText = document.querySelector('#play-text');
const sleepButton = document.querySelector('#sleep');

/* * * * * * * * * * * CLASS * * * * * * * * * * * */
class Pet {
    constructor() {
        this.happiness = Math.floor(Math.random() * 100);
        this.tummy = Math.floor(Math.random() * 100);
        this.energy = Math.floor(Math.random() * 100);
    };

    updateStats() {
        if (this.tummy <= 0 || this.energy <= 0) { // if exhausted or starving, lower mood and reject play
            this.happiness -= 20;
            playText.innerText = '';
            playButton.style.backgroundColor = 'rgb(140, 123, 252, 0.5)';
        } else {
            playText.innerText = 'PLAY';
            playButton.style.backgroundColor = 'rgb(140, 123, 252)';
        }

        if (this.tummy >= 100) { // if tummy is too full, reject food
            feedText.innerText = '';
            feedButton.style.backgroundColor = 'rgb(140, 123, 252, 0.5)';
        } else {
            feedText.innerText = 'FEED';
            feedButton.style.backgroundColor = 'rgb(140, 123, 252)';
        }

        if (this.happiness < 0) this.happiness = 0;
        if (this.tummy < 0) this.tummy = 0;
        if (this.energy < 0) this.energy = 0;

        happyStat.innerText = this.happiness;
        tummyStat.innerText = this.tummy;
        energyStat.innerText = this.energy;
    };

    play() {
        if (this.energy > 0) {
            buttonContainer.classList.add('disable-buttons');
            petContainer.classList.remove('pacing');
            petContainer.classList.add('center-pet');
            petGraphic.classList.add('playing');

            this.happiness += Math.floor(Math.random() * 50);
            this.energy -= 10;
            this.tummy -= 20;

            setTimeout(() => {
                petContainer.classList.remove('center-pet')
                petGraphic.classList.remove('playing');
                petContainer.classList.add('pacing');
                buttonContainer.classList.remove('disable-buttons');
            }, 7000);

            this.updateStats();
        };
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

        this.energy += Math.floor(Math.random() * 40); // varying level of energy increase
        this.tummy -= Math.floor(Math.random() * 20); // varying level of hunger increase (decrease tummy filled)
        this.happiness += Math.floor(Math.random() * (-5 - 50)); // possibility of waking up in a better or worse mood

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