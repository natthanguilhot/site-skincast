// Animation d'apparition
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
//
// CARROUSEL
export function nextCarrousel (arrayImgCarrousel) {
  for (const [i, img] of arrayImgCarrousel.entries()) { // Pour chaque img,
    if(arrayImgCarrousel[arrayImgCarrousel.length-1].classList.contains('flex')) { // Si l'image est la dernière, alors on reaffiche la première
      arrayImgCarrousel[0].classList.add('NextTranslateXNext');
      arrayImgCarrousel[0].classList.replace('hidden',"flex");
      arrayImgCarrousel[arrayImgCarrousel.length-1].classList.replace('flex', 'hidden');
      break
    }else if(img.classList.contains('flex')) { // Sinon on désaffiche l'image acutelle et on affiche l'image suivante (i+1)
      img.classList.replace('flex','hidden');
      arrayImgCarrousel[i+1].classList.replace('hidden','flex');
      arrayImgCarrousel[i+1].classList.add('NextTranslateXNext');  
      break
    }
  }
};
export function previousCarrousel (arrayImgCarrousel) {
  for (const [i, img] of arrayImgCarrousel.entries()) {
    if(arrayImgCarrousel[0].classList.contains('flex')) {// Si l'image est la première, alors on reaffiche la dernière
      arrayImgCarrousel[0].classList.replace('flex', 'hidden');
      arrayImgCarrousel[arrayImgCarrousel.length-1].classList.replace('hidden',"flex");
      arrayImgCarrousel[arrayImgCarrousel.length-1].classList.add('PreviousTranslateXNext');
      break
    }else if(img.classList.contains('flex')) { // Sinon on désaffiche l'image acutelle et on affiche l'image précédente (i+1)
      img.classList.replace('flex','hidden');
      arrayImgCarrousel[i-1].classList.replace('hidden','flex');
      arrayImgCarrousel[i-1].classList.add('PreviousTranslateXNext');
      break
    }
  }
};
//