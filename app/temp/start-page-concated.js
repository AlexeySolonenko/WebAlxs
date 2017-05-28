/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */

var bio = {
  
  /* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  /* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  
	"name" : "Alexey Solonenko",
	"skills" : 
	  [
		{ 
      "name" : "HTML",
			"level" : "+"
		},
		
		{
			"name" : "JS",
			"level" : "+"			
		},

		{
			"name" : "CSS",
			"level" : "++"			
		},
    {
      "name" : "Git",
      "level" : ""
    },
    {
      "name" : "Grunt",
      "level" : ""
    },
    {
      "name" : "Responsive",
      "level" : ""
    },
    {
      "name" : "jQuery",
      "level" : ""
    },
    {
      "name" : "Bootstrap",
      "level" : ""
    },
    {
      "name" : "Industrial HMI background",
      "level" : ""
    }
	  ],
	  "statement" : "Engineer Transiting to Front-End Web Development",
    "photoUrlSmall" : "http://tab4lioz.beget.tech/wp-content/uploads/src/img/Alexey-Solonenko-Photo-mir.jpg",
	  "photoUrlLarge" : "http://tab4lioz.beget.tech/wp-content/uploads/src/img/Alexey-Solonenko-Photo.jpg",
    "photoUrlAlt" :"Profile photo. Baltic grey haired male around 30. Medium weight. 190 cm or 6.23 feet. Fragile build. Checkered shirt. Black and white photo. ",
    "photoTooltip" :
      "Responsive images using art direction and srcset.&#13;&#10;"+
      "Change window size (if your browser supports) or use dev tools to test.&#13;&#10;"+
      "Also I am using proven framework media-queries &#13;&#10;"+
      "based tools for older browsers. Grunt automated &#13;&#10; "+
      "processing and optimization.",
	    "contacts" : [
			{ "location" : "Malta, EU" },
			{ "skype" : "" }
		],
	  "metrics": null,
	  "origin" : "Russia",
    "targetRole" : "Front End Developer",
	
  /* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */
  
  "display" : function(objectBio){
      var formattedHTML = "";
      
      
      /* NAME     */
      objectBio.name.length > 2 ? (
        formattedHTML = HTMLheaderNameSmall.replace("%data%",objectBio["name"]),
        $(".start-page-id-name-small").append(formattedHTML),
        console.log(formattedHTML),
        formattedHTML = " ",
        formattedHTML = HTMLheaderNameBig.replace("%data%",objectBio["name"]),
        $(".start-page-id-name-big").append(formattedHTML),
        console.log(formattedHTML)
				):(
					console.log("No name specified")
        );

      /* INTRO */   
      formattedHTML = objectBio["targetRole"] + ' : ';
      objectBio["skills"].forEach(function(skill){
        skill["name"].length > 1 ? (
          formattedHTML = formattedHTML + (skill["name"])+', '
        ):(
          console.log("This skill is not defined")
        );
      });
      formattedHTML = formattedHTML.slice(0,(formattedHTML.length-2));
      formattedHTML = formattedHTML + ".";
      $(".start-page-id-intro").append(formattedHTML);
      
      /* PROFILE PHOTO */      
      formattedHTML = " ";
      objectBio.photoUrlSmall.length > 2 ? (
       formattedHTML = HTMLbioPicSmall.replace("%data%",objectBio["photoUrlSmall"]),
       formattedHTML = formattedHTML.replace("%data-tooltip%",objectBio["photoTooltip"])
				):(
					console.log("No small bio photo specified")
        );
      objectBio.photoUrlLarge.length > 2 ? (
       formattedHTML = formattedHTML + HTMLbioPicLarge.replace("%data%",objectBio["photoUrlLarge"])
				):(
					console.log("No large bio photo specified")
        )
      ;
        
      formattedHTML = formattedHTML + HTMLbioPicDefault.replace("%data%",objectBio["photoUrlLarge"]);
       
      objectBio.photoUrlAlt.length > 2 ? (
        formattedHTML = formattedHTML + HTMLbioPicAlt.replace("%data%",objectBio["photoUrlAlt"])
        ):(
					console.log("No alt text specified specified")
        )
      ;
      console.log(formattedHTML);
      console.log(formattedHTML);
      $(".start-page-id-CVphoto").append(formattedHTML);
      
      
  }
}


/* PORTFOLIO OBJECT */  /* PORTFOLIO OBJECT */
/* PORTFOLIO OBJECT */  /* PORTFOLIO OBJECT */
/* PORTFOLIO OBJECT */  /* PORTFOLIO OBJECT */

var portfolio = {
  
/* ~~~~~ DATA-PROPERTIES ~~~~~~ */
/* ~~~~~ DATA-PROPERTIES ~~~~~~ */
      
  "shortStatement" : "Each project has its own motto. There is no single golden rule for all projects.",
  "portfolio" : [
    {
      "title" : "Langugage courses promotion site. Joomla. W3schools framework - built-in joomla template.",
      "url" : "http://studysnami.ru/index.php/ru/",
      "desc" : "Real working website promoting studying English in Malta to Russians. English version is under work. I get to like Joomla a lot while working on this website. W3 css theme.",
      "motto": "Better an egg today than a hen tomorrow.",
      "descShort" : "My first, 'just get it work now' project. Which surprised me with visitors positive feedback and ignite to give a Front End a professional try. Thanks W3schools for their amazing work",
      "tooltip": ""
    },
    {
      "title" : "Current portfolio webiste. Wordpress. Bootstrap. Custom",
      "url" : "http://tab4lioz.beget.tech/",
      "desc" : "Portfolio, skills and techniques I am learning at my Front End Development course. A tooltip-rich responsive website that I continuously developing and improving.) ",
      "motto": "Do it right is the shortest road.",
      "descShort" : "Portfolio, skills and techniques I am learning at my Front End Development course. A tooltip-rich responsive website that I continuously developing and improving.)",
      "tooltip": ""
    }
  ],

/* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */
/* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */
  "displayShort" : function(portfolio){
    
    // short intro statement
    var formattedHTML = "";
    portfolio["shortStatement"].length > 2 ? (
      formattedHTML = HTMLportfolioShortCollapseButton.replace("%data%",portfolio["shortStatement"])
    ):(
      console.log("Short statement is not provided") 
    );
    $(".start-page-portfolio-short").append(formattedHTML);
    formattedHTML = "";
    
    // content
    portfolio["portfolio"].forEach(function(localItem){
      formattedHTML =  HTMLportfolioShortEntryTitleUrl.replace("%data%",localItem["url"])+
        HTMLportfolioShortEntryTitle.replace("%data%",localItem["title"]) +
        HTMLportfolioShortEntryMotto.replace("%data%", localItem["motto"]) +
        HTMLportfolioShortEntryDescShort.replace("%data%",localItem["descShort"]);
      formattedHTML = HTMLportfolioShortEntryBox.replace("%data%",formattedHTML);
      $(".start-page-portfolio-short-collapse").append(formattedHTML);
      formattedHTML = "";      
    }); 
    
    
  }
    
  
}


/* WORK OBJECT */
/* WORK OBJECT */

var work = {
	"jobs" : [ 
		{
			"status" : "current",
			"position" : "Electrical and Instrument Engineer",
			"employer" : "AIM Enterprises \n",
			"years" : "08.2015 - current",
			"location" : "Paola, Malta\n"
		},

		{
			"status" : "former",
			"position" : "Senior Maintenance Electrical Engineer",
			"employer" : "Total SA",
			"years" : "03.2013 - 08.2015",
			"location" : "Kharyaga, Arctic, Russia"
		},

		{
			"status" : "former",
			"position" : "Commissioning Lead Electrical Engineer",
			"employer" : "Dietsmann Technologies Ltd.",
			"years" : "04.2011 - 11.2012",
			"location" : "Kharyaga, Arctic, Russia"
		},

		{
			"status" : "current",
			"position" : "Instrumentation Engineer",
			"employer" : "Inzhener Ltd.",
			"years" : "07.2009 - 03.2011",
			"location" : "Krasnoyarsk, Russia"
		},

		{
			"status" : "current",
			"position" : "Automation Technician",
			"employer" : "MT-Tekhno Ltd.",
			"years" : "12.2007 - 03.2009",
			"location" : "Krasnoyarsk, Russia"
		}
	]
}

/* EDUCATION OBJECT */
/* EDUCATION OBJECT */

var education = {
	"CPD" : [
		{
			"name" : "Udacity",
			"major" : "Front-End Web Developer",
			"years" : "04.2017 - current",
			"city" : "Web"
		},
		
		{
			"name" : "George Brown College",
			"major" : "PLC Technician, certificate",
			"years" : "2012",
			"city" : "Toronto"
		}
	],
	
	"schools" : [
		{
			"name" : "Siberian Federal University",
			"major" : "Industrial Control Systems",
			"years" : "2002-2007",
			"location" : "Krasnoyarsk"
		},

		{
			"name" : "Siberian Federal University",
			"major" : "English Language Translator",
			"years" : "2003-2007",
			"location" : "Krasnoyarsk"
		},
		
		{
			"name" : "Siberian Federal University",
			"major" : "Reserve Army Officer, munitions.",
			"years" : "2003-2007",
			"location" : "Krasnoyarsk"
		}
	]
	
}

/* PROJECT OBJECT */
/* PROJECT OBJECT */
/* PROJECT OBJECT */


var projects = {
	"records" : [
		{
			"title" : "Language school website",
			"dates" : "",
			"description" : "Website that I made myself",
			"image" : "NA",
			"url" : ""
		},
		
		{
			"title" : "Kharyaga Phase 4",
			"dates" : "",
			"description" : "30 MW expansion of a 30kbpd oil&gas facility",
			"image" : "NA",
			"url" : ""
		},
		
		{
			"title" : "Kharyaga Phase 3",
			"dates" : "",
			"description" : "Commissioned of electrical systems of a remote 10 kbpd pad",
			"image" : "NA",
			"url" : ""
		}
	
	],
	
	"display" : function(objectProjects){
			
		objectProjects.records.forEach(function(project){
			
			$("#main").append(HTMLprojectStart);
			var formattedHTML = HTMLprojectTitle.replace("%data%",project.title);
			$("#projects").append(formattedHTML);
			formattedHTML = HTMLprojectDates.replace("%data%",project.dates);
			$("#projects").append(formattedHTML);
			formattedHTML = HTMLprojectDescription.replace("%data%",project.description);
			$("#projects").append(formattedHTML);
			
			project.image.length > 2 ? (
					formattedHTML = HTMLprojectImage.replace("%data%",project.image),
					$("#projects").append(formattedHTML)	
				):(
					console.log("No image specified")
				);
			});
	}
	

}


	
/* SKILLS */
/* SKILLS */
/* SKILLS */







// HEADER RAW

var HTMLheaderNameSmall = '<h1 data-toggle="tooltip" title="%data-tooltip%" data-placement="bottom">%data%</h1><hr>';
var HTMLheaderNameBig = '<h1 data-toggle="tooltip" title="%data-tooltip%" data-placement="bottom" class="text-uppercase">%data%</h1><hr>';
var HTMLheaderRole = '<span>%data%</span><hr>';
var HTMLbioPicSmall = '<picture data-toggle="tooltip" title="%data-tooltip%" class="img-responsive img-circle center-block"><source class="img-responsive img-circle center-block" media="(max-width: 799px)" srcset="%data%">';
var HTMLbioPicLarge = '<source class="img-responsive img-circle center-block" media="(min-width: 800px)" srcset="%data%">';
var HTMLbioPicDefault = '<img class="img-responsive img-circle center-block" src="%data%"';
var HTMLbioPicAlt = ' alt="%data%" ></picture>';
var HTMLheaderIntro = '<span>%data%</span>';

// PORTFOLIO SHORT RAW
var HTMLportfolioShortCollapseButton = '<span class=" panel  ">%data%</span>';
var HTMLportfolioShortEntryBox = '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">%data%</div>';
var HTMLportfolioShortEntryTitleUrl = '<div class="row"><h3><a href="%data%">';
var HTMLportfolioShortEntryTitle ='%data%</a></h3></div>';
var HTMLportfolioShortEntryMotto ='<div class="row"><span>motto: </span>%data%</div>';
var HTMLportfolioShortEntryDescShort ='<div class="row"><span><b>About: </b></span>%data%</div>';



var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

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