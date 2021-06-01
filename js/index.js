import {nextCarrousel,previousCarrousel} from './script.js';

// CARROUSEL
let arrayImgCarrousel = document.querySelectorAll('.img_carrousel'); // On selectionne toutes les images du carousel
let previousImgCarrousel = document.querySelector('.previous_img_carrousel'); // On selectionne les fleches
let nextImgCarrousel = document.querySelector('.next_img_carrousel');
nextImgCarrousel.addEventListener('click', function(){ // Au click de la fleche,
  nextCarrousel(arrayImgCarrousel);
});
previousImgCarrousel.addEventListener('click', function(){ // Même traitement mais avec la fleche précédente
  previousCarrousel(arrayImgCarrousel);
});
setInterval(() => {
    nextCarrousel(arrayImgCarrousel);
}, 10000);
//

// Galerie
let divGalerie = document.querySelector('#container_galerie');
let arrowRigthGalerie = document.querySelector('.arrow_right_galerie');
let scrollX = 50;
arrowRigthGalerie.addEventListener('click', function(){
  divGalerie.scrollTo(scrollX,0);
  scrollX = scrollX +50;
});