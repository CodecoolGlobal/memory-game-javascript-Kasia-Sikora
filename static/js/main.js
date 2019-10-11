const cardsArray = [
    {
        name: 'penguin',
        img: "/static/img/penguin.jpg"
    },
    {
        name: 'bear',
        img: "/static/img/bear.jpg"
    },
    {
        name: 'bull',
        img: "/static/img/bull.jpg"
    },
    {
        name: 'buffalo',
        img: "/static/img/buffalo.jpg"
    },
    {
        name: 'kangaroo',
        img: "/static/img/kangaroo.jpg"
    },
    {
        name: 'cat',
        img: "/static/img/cat.jpg"
    },
    {
        name: 'cat2',
        img: "/static/img/cat2.jpg"
    },
    {
        name: 'deer',
        img: "/static/img/deer.jpg"
    },
    {
        name: 'dog',
        img: "/static/img/dog.jpg"
    },
    {
        name: 'elephant',
        img: "/static/img/elephant.jpg"
    },
    {
        name: 'giraffe',
        img: "/static/img/giraffe.jpg"
    },
    {
        name: 'hippo',
        img: "/static/img/hippo.jpg"
    },
    {
        name: 'hog',
        img: "/static/img/hog.jpg"
    },
    {
        name: 'panther',
        img: "/static/img/panther.jpg"
    },
    {
        name: 'rabbit',
        img: "/static/img/rabbit.jpg"
    },
    {
        name: 'raccoon',
        img: "/static/img/raccoon.jpg"
    },
    {
        name: 'rhino',
        img: "/static/img/rhino.jpg"
    },
    {
        name: 'sluggard',
        img: "/static/img/sluggard.jpg"
    },
    {
        name: 'tiger',
        img: "/static/img/tiger.jpg"
    },
    {
        name: 'wolf',
        img: "/static/img/wolf.jpg"
    },
];

let newCardsArray = cardsArray.concat(cardsArray);

newCardsArray.sort(function () {return 0.5 - Math.random()});

let game = document.getElementById('game');

let grid = document.createElement('div');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

let count = 0;

let firstChoice = '';

let secondChoice = '';

let previousChoice = '';


for (let cards of newCardsArray) {

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = cards.name;
    card.addEventListener('click', clickHandler);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.style.backgroundImage = `url(${cards.img})`;

    const cardTop = document.createElement('div');
    cardTop.classList.add('card-top');
    cardTop.style.backgroundImage = `url('/static/img/leaf1.jpg')`;

    card.appendChild(cardTop);
    card.appendChild(cardBody);
    grid.appendChild(card);
}


function clickHandler(event) {
    count++;
    if (event.target.parentElement.getAttribute('data-name') === previousChoice) {
        return
    }
    if (count <=2) {
        if (count === 1) {
            firstChoice = event.target.parentElement.getAttribute('data-name');
            console.log('first' + firstChoice)
        }
        if (count === 2) {
            secondChoice = event.target.parentElement.getAttribute('data-name');
            console.log('second'+ secondChoice)
        }

        console.log(event);
        let body = event.target.parentNode.firstChild;
        body.style.display = 'none';

        let top = event.target.parentNode.lastChild;
        top.style.display = 'flex';
        top.classList.add('selected');

    } else {
        let body = event.target.parentNode.firstChild;
        body.style.display = 'flex';

        let top = event.target.parentNode.lastChild;
        top.style.display = 'none';
        top.classList.remove('selected');
        count = 0;
    }
    previousChoice = event.target.parentElement.getAttribute('data-name');
}


