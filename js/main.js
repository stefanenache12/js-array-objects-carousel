const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carousel = document.getElementById('carousel');
const buttonUp = document.getElementById('button-up');
const buttonDown = document.getElementById('button-down');



for (let index = 0; index < images.length; index++) {
    const element = images[index];

    let carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner','d-none','img-'+`${index}`);
    carousel.appendChild(carouselInner);

    let description = document.createElement('div');
    description.classList.add('description-container');
    carouselInner.appendChild(description);

    for (const key in element) {

        if (key === 'image') {
            
            let img = document.createElement('img');
            img.src = element[key];
            carouselInner.appendChild(img);
        } 
        else if (key === 'title'){

            let movieTitle = document.createElement('h2');
            movieTitle.innerHTML = `${element[key]}`;
            description.appendChild(movieTitle);
        }
        else {
            let movieDescription = document.createElement('p');
            movieDescription.innerHTML = `${element[key]}`;
            description.appendChild(movieDescription);
        }
    }

    if(index == 0){
        carouselInner.classList.remove('d-none');
    }
    
}

let currentImg = 0;

buttonUp.addEventListener('click', () => {
    currentImg = (currentImg - 1 + images.length) % images.length;   //GRAZIE AL MODULO % QUANDO currentImg RAGGIUNGE 
    currentImgDisplayed();                                           // VALORE 4 + 1 VIENE DIVISO PER imgCarousel.length
});                                                                     // SE RESTO DELLA DIVISIONE è 0 curentImg torna a 0;

buttonDown.addEventListener('click', () => {
    currentImg = (currentImg + 1) % images.length;
    currentImgDisplayed();
});

function currentImgDisplayed() {

    for (let i = 0; i < images.length; i++) {
        let imgDisplayed = document.querySelector('.img-' + i);
        imgDisplayed.classList.add('d-none');
    }
    let currentCarouselImg = document.querySelector('.img-' + currentImg);
    currentCarouselImg.classList.remove('d-none');
}