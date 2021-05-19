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
let arrayImgCarousel = document.querySelectorAll('.img_carousel');
let previousImgCarousel = document.querySelector('.previous_img_carousel');
let nextImgCarousel = document.querySelector('.next_img_carousel');
nextImgCarousel.addEventListener('click', function(){
  for (const [i, img] of arrayImgCarousel.entries()) {
    if(arrayImgCarousel[2].classList.contains('flex')) {
      arrayImgCarousel[2].classList.replace('flex', 'hidden');
      arrayImgCarousel[0].classList.replace('hidden',"flex");
      break
    }else if(img.classList.contains('flex')) {
      img.classList.replace('flex','hidden');
      arrayImgCarousel[i+1].classList.replace('hidden','flex')
      break
    }
  }
});
previousImgCarousel.addEventListener('click', function(){
  for (const [i, img] of arrayImgCarousel.entries()) {
    if(arrayImgCarousel[0].classList.contains('flex')) {
      arrayImgCarousel[0].classList.replace('flex', 'hidden');
      arrayImgCarousel[2].classList.replace('hidden',"flex");
      break
    }else if(img.classList.contains('flex')) {
      img.classList.replace('flex','hidden');
      arrayImgCarousel[i-1].classList.replace('hidden','flex')
      break
    }
  }
});
