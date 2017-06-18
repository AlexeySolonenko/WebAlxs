
displayWork();
bio.display(bio);
portfolio.displayShort(portfolio);
bio.displayCommits(bio);


$(document).ready( function(){ 

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
  $('[data-toggle="tooltip"]').tooltip();
  setTimeout(function(){
      $('.user-welcome-tooltip').tooltip("show");
    },1700);
  setTimeout(function(){
      $('.user-welcome-tooltip').tooltip("hide");
    },6000);
  // $('span[class*="user-span-flies"').removeClass('user-span-flies-left-start');
  
}); 
//  $('.user-hide-show').hover(console.log('in'),console.log('out'));//'user-span-flies-left-start');
// $('.user-hide-show').click(console.log('in'));//'user-span-flies-left-start');
// short portfolio collapsable 
$(".start-page-portfolio-short").click( function(){ 
  $(".start-page-portfolio-short-collapse").is(':visible') ? (
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