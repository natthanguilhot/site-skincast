(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.opacity-0');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -180) {
        element.classList.add('transition_top');
        element.classList.remove('opacity-0');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('scroll', init);

  init();
  checkPosition();
})();

// CAROUSEL
let arrayImgCarousel = document.querySelectorAll('.img_carousel'); // On selectionne toutes les images du carousel
let previousImgCarousel = document.querySelector('.previous_img_carousel'); // On selectionne les fleches
let nextImgCarousel = document.querySelector('.next_img_carousel');
nextImgCarousel.addEventListener('click', function(){ // Au click de la fleche,
  for (const [i, img] of arrayImgCarousel.entries()) { // Pour chaque img,
    if(arrayImgCarousel[arrayImgCarousel.length-1].classList.contains('flex')) { // Si l'image est la dernière, alors on reaffiche la première
      arrayImgCarousel[arrayImgCarousel.length-1].classList.add('NextTranslateXActual');
      setTimeout(() => {
        arrayImgCarousel[arrayImgCarousel.length-1].classList.replace('flex', 'hidden');
        arrayImgCarousel[arrayImgCarousel.length-1].classList.remove('NextTranslateXActual');
      }, 500);
      arrayImgCarousel[0].classList.replace('hidden',"flex");
      arrayImgCarousel[0].classList.add('NextTranslateXNext');
      setTimeout(() => {
        arrayImgCarousel[0].classList.remove('NextTranslateXNext');
      }, 500);
      break
    }else if(img.classList.contains('flex')) { // Sinon on désaffiche l'image acutelle et on affiche l'image suivante (i+1)
      img.classList.add('NextTranslateXActual');
      setTimeout(() => {
        img.classList.replace('flex','hidden');
        img.classList.remove('NextTranslateXActual');
      }, 500);
      arrayImgCarousel[i+1].classList.replace('hidden','flex');
      arrayImgCarousel[i+1].classList.add('NextTranslateXNext');
      setTimeout(() => {
        arrayImgCarousel[i+1].classList.remove('NextTranslateXNext');
      }, 500);
      break
    }
  }
});
previousImgCarousel.addEventListener('click', function(){ // Même traitement mais avec la fleche précédente
  for (const [i, img] of arrayImgCarousel.entries()) {
    if(arrayImgCarousel[0].classList.contains('flex')) {// Si l'image est la première, alors on reaffiche la dernière
      arrayImgCarousel[0].classList.add('PreviousTranslateXActual');
      setTimeout(() => {
        arrayImgCarousel[0].classList.replace('flex', 'hidden');
        arrayImgCarousel[0].classList.remove('PreviousTranslateXActual');
      }, 500);
      arrayImgCarousel[arrayImgCarousel.length-1].classList.replace('hidden',"flex");
      arrayImgCarousel[arrayImgCarousel.length-1].classList.add('PreviousTranslateXNext');
      setTimeout(() => {
        arrayImgCarousel[arrayImgCarousel.length-1].classList.remove('PreviousTranslateXNext');
      }, 500);

      break
    }else if(img.classList.contains('flex')) { // Sinon on désaffiche l'image acutelle et on affiche l'image précédente (i+1)
      img.classList.add('PreviousTranslateXActual');
      setTimeout(() => {
        img.classList.replace('flex','hidden');
        img.classList.remove('PreviousTranslateXActual');
      }, 500);
      arrayImgCarousel[i-1].classList.replace('hidden','flex');
      arrayImgCarousel[i-1].classList.add('PreviousTranslateXNext');
      setTimeout(() => {
        arrayImgCarousel[i-1].classList.remove('PreviousTranslateXNext');
      }, 500);
      break
    }
  }
});
//