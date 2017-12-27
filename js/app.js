$(document).ready(function() {

  var slider = $('#slider');
  var next = $('#btn-next');
  var previous = $('#btn-prev');

  $('#slider .slider-section:last').insertBefore('#slider .slider-section:first');
  slider.css('margin-left', '-' + 100 + '%');

  function moveRight() {
    slider.animate({
      marginLeft: '-' + 200 + '%'
    }, 700, function() {
      $('#slider .slider-section:first').insertAfter('#slider .slider-section:last');
      slider.css('margin-left', '-' + 100 + '%');
    });
  }

  function moveLeft() {
    slider.animate({
      marginLeft: 0
    }, 700, function() {
      $('#slider .slider-section:last').insertBefore('#slider .slider-section:first');
      slider.css('margin-left', '-' + 100 + '%');
    });
  }

  function autoplay() {
    interval = setInterval(function() {
      moveRight();
    }, 5000);
  }
  next.on('click', function() {
    moveRight();
    clearInterval(interval);
    autoplay();
  });

  previous.on('click', function() {
    moveLeft();
    clearInterval(interval);
    autoplay();
  });


  autoplay();
});
