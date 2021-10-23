console.log('obj oriented js connected');

/* * * * * * * * * CACHED ELEMENT REFERENCES * * * * * * * * */

const feedButton = document.querySelector('#feed');
const playButton = document.querySelector('#play');
const sleepButton = document.querySelector('#sleep');
const screen = document.querySelector('.screen');
const petContainer = document.querySelector('.pet');
const buttonContainer = document.querySelector('.button-container');

/* * * * * * * * * * * CLASS * * * * * * * * * * * */
class Pet {
    constructor() {
        this.tummy = Math.floor(Math.random() * 100);
        this.happiness = Math.floor(Math.random() * 100);
        this.energy = Math.floor(Math.random() * 100);
    }

    feed() {
        if (this.tummy < 100) {
            console.log('feeding')
            this.tummy += 30;
            this.happiness += 10;
        } else {

        }

        if (this.tummy > 100) {
            this.energy -= 60;
            this.happiness -= 30;
            console.log('you overfed me');
        }

        console.log(pet)
    }

    play() {
        console.log('playing')

        buttonContainer.classList.add('disable-buttons');
        screen.classList.remove('pacing')
        screen.classList.add('center-pet')
        petContainer.classList.add('playing')
        
        this.happiness += 20;
        this.energy -= 20;
        this.tummy -= 30;
        
        setTimeout(() => {
            screen.classList.remove('center-pet')
            petContainer.classList.remove('playing');
            screen.classList.add('pacing')
            buttonContainer.classList.remove('disable-buttons');
        }, 10000)

        console.log(pet)
    }

    sleep() {
        console.log('sleeping')

        screen.classList.remove('pacing')
        screen.classList.add('center-pet')
        petContainer.classList.add('sleeping')

        this.energy += 40;
        this.happiness += 5;
        this.tummy -= 20;

        setTimeout(() => {
            screen.classList.remove('center-pet')
            petContainer.classList.remove('sleeping');
            screen.classList.add('pacing')
        }, 9000)

        console.log(pet)
    }
}

const pet = new Pet();

/* * * * * * * * * * * EVENT LISTENERS * * * * * * * * * * * */

feedButton.addEventListener('click', () => pet.feed());
playButton.addEventListener('click', () => pet.play());
sleepButton.addEventListener('click', () => pet.sleep());