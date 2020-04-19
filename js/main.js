$(document).ready(function(){



  var search_on = false;

  $('.fa-search').click(function(){
    $('.search, .fa-times, .fa-search').toggle();
    search_on = true;
  });

  $('.fa-times').click(function(){
    $('.search, .fa-times, .fa-search').toggle();
    search_on = false
  });

  $('.input_field').keypress(function(){
    $('.blinker').hide();
  });

  $('.slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToScroll: 1
  });






  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('toggle_menu');
    $('body').toggleClass('overflow');
  });




  $(document).mouseup(function (e){
    var container = $(".search");
  	if (container.is(e.target)){
      container.fadeOut();
      $('.search, .fa-times, .fa-search').toggle();
  	}
  });




});
