function displayWork(){
	work.jobs.forEach(function(record){
		$("#workExperience").append(HTMLworkStart);
		var formattedWork = HTMLworkEmployer.replace("%data%",record.employer);
		$("#workExperience").append(formattedWork);
		console.log(formattedWork);
		var formattedWork = HTMLworkTitle.replace("%data%",record.position);
		$("#workExperience").append(formattedWork);
		console.log(formattedWork);
		var formattedWork = HTMLworkDates.replace("%data%",record.years);
		$("#workExperience").append(formattedWork);
		console.log(formattedWork);
		var formattedWork = HTMLworkLocation.replace("%data%",record.location);
		$("#workExperience").append(formattedWork);
		console.log(formattedWork);
		var formattedWork = HTMLworkDescription.replace("%data%",record.status);
		$("#workExperience").append(formattedWork);
		console.log(formattedWork);
		
		var formattedEmployerTitle = HTMLworkEmployer.replace("%data%",record.employer) +
		" " + HTMLworkTitle.replace("%data%",record.position);
		console.log(formattedEmployerTitle);
		$(".work-entry:last").append(formattedEmployerTitle);
		
	});
}

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
  $(".start-page-portfolio-short-minus").css('display','none'),
  $(".start-page-portfolio-short-plus").css('display','inline')
});

$(".start-page-portfolio-short").click( function(){ 
  $(".start-page-portfolio-short-collapse").is(':visible') ? (
   $(".start-page-portfolio-short-minus").css('display','none'),
   $(".start-page-portfolio-short-plus").css('display','inline')
  ) : (
   $(".start-page-portfolio-short-minus").css('display','inline'),
   $(".start-page-portfolio-short-plus").css('display','none')
  ); 
});