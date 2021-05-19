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
    if(arrayImgCarousel[arrayImgCarousel.length-1].classList.contains('flex')) { // Si l'image est la dernière, alors on reaffiche la premiere
      arrayImgCarousel[arrayImgCarousel.length-1].classList.replace('flex', 'hidden');
      arrayImgCarousel[0].classList.replace('hidden',"flex");
      break
    }else if(img.classList.contains('flex')) { // Sinon on désaffiche l'image acutelle et on affiche l'image suivante (i+1)
      img.classList.replace('flex','hidden');
      arrayImgCarousel[i+1].classList.replace('hidden','flex')
      break
    }
  }
});
previousImgCarousel.addEventListener('click', function(){ // Même traitement mais avec la fleche précédente
  for (const [i, img] of arrayImgCarousel.entries()) {
    if(arrayImgCarousel[0].classList.contains('flex')) {
      arrayImgCarousel[0].classList.replace('flex', 'hidden');
      arrayImgCarousel[arrayImgCarousel.length-1].classList.replace('hidden',"flex");
      break
    }else if(img.classList.contains('flex')) {
      img.classList.replace('flex','hidden');
      arrayImgCarousel[i-1].classList.replace('hidden','flex')
      break
    }
  }
});
