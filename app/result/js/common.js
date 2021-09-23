jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    $('.overlay').fadeToggle();
    return false;
  });

  $('body, .overlay, .top-close').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
      $('.overlay').fadeOut();
    }
  });


  $(".top-mnu, .modal-form__block").click(function (e) {
    e.stopPropagation();
  });

  $('.filter-open').click(function (e) {
    e.preventDefault();
    const self = $(this)
    $(this).toggleClass('open');
    if ( self.hasClass('open') ) {
      $('.filter').slideDown();
    }
    else {
     $('.filter').slideUp(); 
   }    
 })




  let imgWrapper2 = document.querySelector('.addform_file-label span');  
  let fileMulti2 = document.querySelector('#fileMulti-2');


  function download2(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
    //let img = document.createElement('img');
    imgWrapper2.innerHTML = file.name
  }
}


if($('#fileMulti-2').length) {
  fileMulti2.addEventListener("change", function() {
   download2(this); 
 });
}



$('.feedback__next').click(function (e) {
  e.preventDefault()
  $(this).hide();
  $('.feedback__step-1').hide();
  $('.feedback__step-2').slideDown();
});



  //$('.wrapper').prepend('<span class="eye-3"></span>');


  $('.eye-3').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('active');
  });


  //$("#phone_1").mask("+7 (999) 999-99-99");

//Add Inactive Class To All Accordion Headers
$('.accordion-header').toggleClass('inactive-header');

  //Set The Accordion Content Width
  var contentwidth = $('.accordion-header').width();
  $('.accordion-content').css({'width' : contentwidth });
  
  //Open The First Accordion Section When Page Loads
  $('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
  $('.accordion-content').first().slideDown().toggleClass('open-content');
  
  // The Accordion Effect
  $('.accordion-header').click(function () {
    if($(this).is('.inactive-header')) {
      $('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
    
    else {
      $(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });


  $('.tabs-control-1 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-1 .tabs_control_item'),
    contentItem = $('.tabs_content-1 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });


  $('.tabs-control-2 .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.tabs-control-2 .tabs_control_item'),
    contentItem = $('.tabs_content-2 .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });





  if ($('.cats').length) {

    $('.cats').slick({  
     infinite: true,    
     slidesToShow: 4,
     speed: 200,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 4000,
     cssEase: 'ease-out',
     arrows: false,
     dots: false,
     variableWidth: true,
     responsive: [
     {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    }
    ]
  });
  }

  if ($('.popprods-w').length) {

    $('.popprods-w').slick({  
     infinite: true,    
     slidesToShow: 4,
     speed: 200,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 4000,
     cssEase: 'ease-out',
     arrows: true,
     dots: false,

     responsive: [
     {
      breakpoint: 1801,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },

    ]
  });
  }


  $('.card-thumb').click(function (e) {
    $('.card-thumb').removeClass('active');
    const href = $(this).attr('href');
    e.preventDefault();
    $('.card-slide-image').attr('src', '');
    setTimeout(function () {
      $('.card-slide-image').attr('src', href);
    }, 100);
    $('.card-slide-image-w').attr('href', href);
    $(this).addClass('active');
  });


/*
  infinite: true,
  speed: 300,
  slidesToShow: 10,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: false,
  variableWidth: true,
  autoplaySpeed: 4000,
  cssEase: 'ease-out',
  dots: true
  */



/*  $('.link').click(function(e) {
    $('.modal-overlay_1').fadeIn();
    e.preventDefault();
    $('body').addClass('ohi');
  });*/


  $('.pop-close, .modal-overlay').click(function(e) {
    e.preventDefault();
    $('.modal-overlay').fadeOut();
    $('body').removeClass('ohi');
  });

$('.fast').click(function (e) {
  e.preventDefault();  
  $('.modal-overlay').fadeIn();
});

if ($('[data-fancybox="gallery"]').length) {
  $('[data-fancybox="gallery"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });
}


}); //ready

