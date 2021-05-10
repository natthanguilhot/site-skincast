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