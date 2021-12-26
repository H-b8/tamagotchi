console.log(`connecting to your gey friend...`);

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
const playText = document.querySelector('#play-text');
const sleepButton = document.querySelector('#sleep');

/* * * * * * * * * * * CLASS * * * * * * * * * * * */

class Pet {
    constructor() { // creates new pet with randomized stats
        this.happiness = Math.floor(Math.random() * 100);
        this.tummy = Math.floor(Math.random() * 100);
        this.energy = Math.floor(Math.random() * 100);
    };

    resetButtons() {
        playText.innerText = 'PLAY';
        playButton.style.backgroundColor = 'rgb(140, 123, 252)';
        feedText.innerText = 'FEED';
        feedButton.style.backgroundColor = 'rgb(140, 123, 252)';
    }

    rejectPlay() {
        playText.innerText = '';
        playButton.style.backgroundColor = 'rgb(140, 123, 252, 0.5)';
    }

    rejectFood() {
        feedText.innerText = '';
        feedButton.style.backgroundColor = 'rgb(140, 123, 252, 0.5)';
    }

    updateStats() {
        this.resetButtons();
        
        if (this.tummy <= 0) { // if starved
            console.log('im getting hangry and dont want to play right now')
            this.happiness -= ((-this.tummy) * 2); // decrease happiness
            this.energy -= ((-this.tummy) * 3); // decrease energy
            this.rejectPlay();
        } else if (this.tummy >= 100) { // if too full
            console.log('im too full! lets take a nap')
            this.energy -= ((this.tummy - 100) * 3); // decrease energy
            this.rejectFood();
            this.rejectPlay(); // only way out is to sleep it off
        }

        if (this.happiness <= 0) { // if depressed
            console.log('im too sad to eat or play right now... lets take a nap')
            this.rejectFood();
            this.rejectPlay();
        }

        if (this.energy <= 0) { // if no energy
            console.log('im too tired to play right now...')
            this.rejectPlay();
        }
        
        if (this.tummy < 0) this.tummy = 0;
        
        if (this.happiness < 0) this.happiness = 0;
        else if (this.happiness > 100) this.happiness = 100;
        
        if (this.energy < 0) this.energy = 0;
        else if (this.energy > 100) this.energy = 100;

        happyStat.innerText = this.happiness;
        tummyStat.innerText = this.tummy;
        energyStat.innerText = this.energy;
    };

    startAction() {
        buttonContainer.classList.add('disable-buttons');
        petContainer.classList.remove('pacing');
        petContainer.classList.add('center-pet');
    }

    endAction() {
        buttonContainer.classList.remove('disable-buttons');
        petContainer.classList.add('pacing');
        petContainer.classList.remove('center-pet');
    }

    play() {
        if (this.energy > 0) {
            console.log('weeeeeeee!');

            this.startAction();
            petGraphic.classList.add('playing');

            this.happiness += Math.floor(Math.random() * 50); // increase happiness by varying amount
            this.energy -= 20; // decrease energy
            this.tummy -= 25; // increase hunger

            setTimeout(() => {
                petGraphic.classList.remove('playing');
                this.endAction();
                this.updateStats();
            }, 5000);
        };
    };

    feed() {
        if (this.tummy < 100) {
            console.log('yum, thank u');

            this.startAction();
            petGraphic.classList.add('eating');

            this.happiness += Math.floor(Math.random() * 10); // increases happiness by varying amount
            this.energy += 15; // increase energy
            this.tummy += 30; // fill up tummy

            setTimeout(() => {
                petGraphic.classList.remove('eating');
                this.endAction();
                this.updateStats();
            }, 3000);
        };
    };

    sleep() {
        console.log('goodnight! honk shoo honk shoo');

        this.startAction();
        petGraphic.classList.add('sleeping');

        let mood = Math.floor(Math.random() * 50) * (Math.round(Math.random()) ? 1 : -1);
        let newEnergy = Math.floor(Math.random() * 30) * (mood > 0 ? 1 : -1); // if mood is lowered, so is energy

        this.happiness += mood; // possibility of waking up in a better or worse mood
        this.energy += newEnergy; // possibility of waking up more or less refreshed
        this.tummy -= Math.floor(Math.random() * 20); // increase hunger by varying amount

        setTimeout(() => {
            petGraphic.classList.remove('sleeping');
            this.endAction();
            console.log(`—— woke up ${mood < 0 ? 'in a worse mood and feel even more tired' : 'feeling refreshed'}`);
            this.updateStats();
        }, 7000);
    };
};

const pet = new Pet();
pet.updateStats();

/* * * * * * * * * * * EVENT LISTENERS * * * * * * * * * * * */

playButton.addEventListener('click', () => pet.play());
feedButton.addEventListener('click', () => pet.feed());
sleepButton.addEventListener('click', () => pet.sleep());