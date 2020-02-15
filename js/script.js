$('.header__open').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('header__close');
  $('.nav').fadeToggle('500');
})


$(window).on('load resize', function() {
  if ($(window).width() >= 1024) {
    var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 5){
            $('.header__position').addClass('header__fixed');
        }
        if(5 > scrolled){
            $('.header__position').removeClass('header__fixed');
        }
    }
  }
});

$('.modal__close').click(function(e) {
  e.preventDefault();
  $('.modal').addClass('modal__hide');
  $('.modal').removeClass('modal__open');
});


$('.button').click(function(e){
  e.preventDefault();
  $('.modal').removeClass('modal__hide');
  $('.modal').addClass('modal__open');

});

$('#ask1').click(function(e) {
  e.preventDefault();
  $('#answ1').toggleClass('ask__answer-close');
  $('#rotate1').toggleClass('ask__rotate');
  $('.ask__block button span').not('#rotate1').removeClass('ask__rotate');
  $('.ask__ba').not('#answ1').addClass('ask__answer-close')
});

$('#ask2').click(function(e) {
  e.preventDefault();
  $('#answ2').toggleClass('ask__answer-close');
  $('#rotate2').toggleClass('ask__rotate');
  $('.ask__block button span').not('#rotate2').removeClass('ask__rotate');
  $('.ask__ba').not('#answ2').addClass('ask__answer-close')
});

$('#ask3').click(function(e) {
  e.preventDefault();
  $('#answ3').toggleClass('ask__answer-close');
  $('#rotate3').toggleClass('ask__rotate');
  $('.ask__block button span').not('#rotate3').removeClass('ask__rotate');
  $('.ask__ba').not('#answ3').addClass('ask__answer-close')
});

$('#ask4').click(function(e) {
  e.preventDefault();
  $('#answ4').toggleClass('ask__answer-close');
  $('#rotate4').toggleClass('ask__rotate');
  $('.ask__block button span').not('#rotate4').removeClass('ask__rotate');
  $('.ask__ba').not('#answ4').addClass('ask__answer-close')
});

$('#ask5').click(function(e) {
  e.preventDefault();
  $('#answ5').toggleClass('ask__answer-close');
  $('#rotate5').toggleClass('ask__rotate');
  $('.ask__block button span').not('#rotate5').removeClass('ask__rotate');
  $('.ask__ba').not('#answ5').addClass('ask__answer-close')
});

$('#ask6').click(function(e) {
  e.preventDefault();
  $('#answ6').toggleClass('ask__answer-close');
  $('#rotate6').toggleClass('ask__rotate');
  $('.ask__block button span').not('#rotate6').removeClass('ask__rotate');
  $('.ask__ba').not('#answ6').addClass('ask__answer-close')
});

$('#ask7').click(function(e) {
  e.preventDefault();
  $('#answ7').toggleClass('ask__answer-close');
  $('#rotate7').toggleClass('ask__rotate');
  $('.ask__block button span').not('#rotate7').removeClass('ask__rotate');
  $('.ask__ba').not('#answ7').addClass('ask__answer-close')
});
