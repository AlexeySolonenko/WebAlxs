
// displayWork();
bio.display(bio);
portfolio.displayShort(portfolio);
bio.displayCommits(bio);
modalIntro.build(modalIntro);
certs.display(certs);

var carouselArcadeRestart = function(){
  $('#user-arcade-game-carousel').carousel('cycle');
  setTimeout(function(){
    carouselArcadeRestart();
  },2000);
};

$(document).ready( function(){ 
console.log('document ready');
/*
  $(".start-page-portfolio-short-collapse").is(':visible') ? (
   $(".start-page-portfolio-short-minus").css('display','none'),
   $(".start-page-portfolio-short-plus").css('display','inline')
  ) : (
   $(".start-page-portfolio-short-minus").css('display','inline'),
   $(".start-page-portfolio-short-plus").css('display','none')
  );
*/  
  $(".start-page-portfolio-short-minus").css('display','inline');
  $(".start-page-portfolio-short-plus").css('display','none');
  $(".start-page-commitsBio-minus").css('display','none');
  $(".start-page-commitsBio-plus").css('display','inline');
  $(".start-page-certs-minus").css('display','none');
  $(".start-page-certs-plus").css('display','inline');
  $('[data-toggle="tooltip"]').tooltip();
  /* setTimeout(function(){
      $('.user-welcome-tooltip').tooltip("show");
    },1700);
  setTimeout(function(){
      $('.user-welcome-tooltip').tooltip("hide");
    },6000); */
  setTimeout(function(){
      $('.user-modal-intro').modal('show');
    },2000);
  
  // if name is being rendered on a small screen,
  // then break this name in two lines to avoid
  // line overflow - look for the first space character
  // and replace it with line break
  setTimeout(function(){
      $('.start-page-id-name-small span').each(function(){
        ($(this).text() == " ")&&
          ($(this).after("<br /br>"),console.log('hello',$(this)));
      });
  },300);


  
  
  $('.carousel').carousel({
    interval: 500
  });
  carouselArcadeRestart();
  // $('span[class*="user-span-flies"').removeClass('user-span-flies-left-start');
  
}); 
//  $('.user-hide-show').hover(console.log('in'),console.log('out'));//'user-span-flies-left-start');
// $('.user-hide-show').click(console.log('in'));//'user-span-flies-left-start');
// short portfolio collapsable 

// when User closes the modal using one of its buttons,
// then the intro animation restarts. The intro animation
// is the animation of letters flying from the left

$('.start-page-id-name-small span').css('display','inline-block');
$('.user-modal-intro-button1').click(function(){
  $('.start-page-id-name-small span').css('display','none');
  setTimeout(function(){
    $('.start-page-id-name-small span').css('display','inline-block');
  },200);
    $('.start-page-id-name-big span').css('display','none');
  setTimeout(function(){
    $('.start-page-id-name-big span').css('display','inline-block');
  },200);
    $('.start-page-id-intro b:first-of-type span').css('display','none');
  setTimeout(function(){
    $('.start-page-id-intro b:first-of-type span').css('display','inline-block');
  },200);
});
// end of animation restart block


$('.start-page-id-name-small span').hover(function(){
   $(this).css('display','none');
  setTimeout(function(){
    $('.start-page-id-name-small span').css('display','inline-block');
  },30);
});

$('.start-page-id-name-big span').hover(function(){
   $(this).css('display','none');
  setTimeout(function(){
    $('.start-page-id-name-big span').css('display','inline-block');
  },30);
});

$('.start-page-id-intro b:first-of-type span').hover(function(){
   $(this).css('display','none');
  setTimeout(function(){
    $('.start-page-id-intro b:first-of-type span').css('display','inline-block');
  },30);
});

// portfolio collapsable
$(".start-page-portfolio-short").click( function(){ 

  $(".start-page-portfolio-short-collapse").is(':visible') ? (
  console.log('portfolio click'),
   $(".start-page-portfolio-short-minus").css('display','none'),
   $(".start-page-portfolio-short-plus").css('display','inline')
  ) : (
   $(".start-page-portfolio-short-minus").css('display','inline'),
   $(".start-page-portfolio-short-plus").css('display','none')
  ); 
});
// bio commits collapsable
$(".start-page-commitsBioShort").click( function(){ 
  $(".start-page-commitsBioShort-collapse").is(':visible') ? (
   $(".start-page-commitsBio-minus").css('display','none'),
   $(".start-page-commitsBio-plus").css('display','inline')
  ) : (
   $(".start-page-commitsBio-minus").css('display','inline'),
   $(".start-page-commitsBio-plus").css('display','none')
  ); 
});

// certs collapsible
$(".start-page-certs").click( function(){ 
  $(".start-page-certs-collapse").is(':visible') ? (
   $(".start-page-certs-minus").css('display','none'),
   $(".start-page-certs-plus").css('display','inline')
  ) : (
   $(".start-page-certs-minus").css('display','inline'),
   $(".start-page-certs-plus").css('display','none')
  ); 
});
