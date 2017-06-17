function displayWork(){
	work.jobs.forEach(function(record){
		$("#workExperience").append(HTMLworkStart);
		var formattedWork = HTMLworkEmployer.replace("%data%",record.employer);
		$("#workExperience").append(formattedWork);
		
		var formattedWork = HTMLworkTitle.replace("%data%",record.position);
		$("#workExperience").append(formattedWork);
		
		var formattedWork = HTMLworkDates.replace("%data%",record.years);
		$("#workExperience").append(formattedWork);
		
		var formattedWork = HTMLworkLocation.replace("%data%",record.location);
		$("#workExperience").append(formattedWork);
		
		var formattedWork = HTMLworkDescription.replace("%data%",record.status);
		$("#workExperience").append(formattedWork);
		
		
		var formattedEmployerTitle = HTMLworkEmployer.replace("%data%",record.employer) +
		" " + HTMLworkTitle.replace("%data%",record.position);
		
		$(".work-entry:last").append(formattedEmployerTitle);
		
	});
}
displayWork();
bio.display(bio);
portfolio.displayShort(portfolio);
bio.displayCommits(bio);

function spannify(classKey){
  var HTMLtext = $('div[class*="'+classKey+'"]').text();
  console.log(HTMLtext);
};
$(document).ready( function(){ 
spannify('start-page-id-name-big');
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
      $('.start-page-id-name-small > h1').tooltip("show");
      $('.start-page-id-name-big > h1').tooltip("show");
    },500);
  setTimeout(function(){
      $('.start-page-id-name-small > h1').tooltip("hide");
      $('.start-page-id-name-big > h1').tooltip("hide");
      $('.start-page-id-CVphoto picture').tooltip("show");
    },2500);
  setTimeout(function(){
      $('.start-page-id-name-small > h1').tooltip("show");
      $('.start-page-id-name-big > h1').tooltip("show");
      $('.start-page-id-CVphoto picture').tooltip("hide");
    },4500);
  setTimeout(function(){
      $('.start-page-id-name-small > h1').tooltip("hide");
      $('.start-page-id-name-big > h1').tooltip("hide");
      $('.start-page-id-CVphoto picture').tooltip("hide");
      $('.user-welcome-tooltip').tooltip("show");
    },5500);
  setTimeout(function(){
      $('.user-welcome-tooltip').tooltip("hide");
    },10000);
  $('span[class*="user-span-flies"').removeClass('user-span-flies-left-start');
  
});

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