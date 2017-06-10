
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */

var bio = {
  
  /* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  /* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  
	"name" : "Alexey Solonenko",
  "nameTooltip" : "I can: <br /br> "+
                  "  - build 'responsively': @media queries || Bootstrap-grid.<br /br> "+
                  "  - automate with Grunt, play safe with Git.<br /br> "+
                  "  - Bootstrap, W3, custom CSS + keep SEO in mind - metadata, keywords.<br /br> "+
                  "  - optimize web performance using Grunt plugins, art direction (picture and srcset).<br /br> "+
                  "I aspire:<br /br>"+
                  "  - to earn a Front End Developer title through good work.<br /br> "+
                  "  - make happy with my work my project managers and at least 50 clients.<br /br> "+
                  "  - contribute for a better and safer web.<br /br> ",
	"skills" : 
	  [
      {"name" : "HTML", "level" : "+"  },
      {"name" : "JS", "level" : "+"	},
      {"name" : "CSS", "level" : "++"	},
      {"name" : "Git", "level" : "" },
      {"name" : "Grunt", "level" : "" },
      {"name" : "Responsive", "level" : "" },
      {"name" : "jQuery", "level" : "" },
      {"name" : "Bootstrap", "level" : "" },
      {"name" : "Industrial HMI background", "level" : "" }
	  ],
    "commitsBio":[
      {"time":"2017", "title":"fix: Start Front End Development Course","comment":"Started my course in March/April. Welcome to my portfolio website! )"},
      {"time":"2017", "title":"refactor: Make first working website.","comment":"Made first working website for a real client. Got surprised by result and feedback. Interrogated IT acquaintances and decided to give a try to enter IT field."},
      {"time":"2015", "title":"test: Move to Malta","comment":"Oil&gas collapse laid us off, but we ended happily up in Malta."},
      {"time":"2015", "title":"docs: Oil industry fall-down.","comment":"In 4.5 years earend two promotions, get employed by a Forbes super-major, spent 65% of time away from home on business trips. Still got laid off together with other thousands."},
      {"time":"<b>2012 10 27</b>", "title":"<b>BEST: MARRIED LIDDY</b>","comment":"<b>Till today is second to init my achievement ! )</b>"},      
      {"time":"2011", "title":"feat: Join oil&gas industry","comment":"Started oil&gas career at an international project."},
      {"time":"2009", "title":"test: Construction and project support","comment":"Joined a Syrian-led ambitious start-up within commercial construction"},
      {"time":"2007", "title":"style:Trimmed degree with a new haircut","comment":"Graduated as Industrial Automation Engineer. Civil-trained reserve (operations support) army officer. Landed my first electronics technician job(s)."},
      {"time":"2002", "title":"fix: Prepare for uni. Trim, feed, groom, train, and ^fix","comment":"First significant training and attempts in branching."},
      {"time":"1985", "title":"init","comment":"Parents made the best so far commit."}
    ],
    "commitsBioTitle":"  Alexey['commits'].display() - my bio in few words.",
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
	  "contacts" : {
			"country" : "Malta, EU",
			"skype" : "alexey_solonenko",
      "mobile" : {'primary':'+35699703115','secondary':'+35699503677'},
      "email" : ['ot2@bk.ru','tab4@live.com'],
      "website" : "http://tab4lioz.beget.tech",
      "city" : "L-Imsida",
      "welcomeTooltip" : "<b><h4><br /br>!      CHECK TOOLTIPS (THERE ARE MANY)     !<br /br>"+
      "!     AND ENJOY YOUR TIME HERE!     !<br /br></h4></b>"
		},
	  "metrics": null,
	  "origin" : "Russia",
    "targetRole" : "Front End Developer",
	
  /* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */
  
  "display" : function(objectBio){
      var formattedHTML = "";
      
      
      /* NAME     */
      objectBio.name.length > 2 ? (
        formattedHTML = HTMLheaderNameSmall.replace("%data%",objectBio["name"]),
        formattedHTML = formattedHTML.replace("%data-tooltip%",objectBio["nameTooltip"]),
        $(".start-page-id-name-small").append(formattedHTML),
        console.log(formattedHTML),
        formattedHTML = " ",
        formattedHTML = HTMLheaderNameBig.replace("%data%",objectBio["name"]),
        formattedHTML = formattedHTML.replace("%data-tooltip%",objectBio["nameTooltip"]),
        $(".start-page-id-name-big").append(formattedHTML),
        console.log(formattedHTML)
				):(
					console.log("No name specified")
        );
        formattedHTML = "";
        
      /* SHORT CONTACT INFO */
      formattedHTML = objectBio["contacts"]["email"][0] + ', ' +
        objectBio["contacts"]["mobile"]["primary"];
      formattedHTML = HTMLcontactShort.replace("%data%",formattedHTML);
      formattedHTML = formattedHTML.replace("%data-tooltip%",objectBio["contacts"]["welcomeTooltip"]);
      $(".start-page-id-intro").prepend(formattedHTML);
      formattedHTML = "";
        
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
      formattedHTML = HTMLheaderIntro.replace("%data%",formattedHTML);
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
               
  },
  
  "displayCommits":function(objectBio2){
    // collapsible button text
    var formattedHTML = "";
    objectBio2["commitsBioTitle"].length > 2 ? (
      formattedHTML = HTMLcommitsBioCollapseButton.replace("%data%",objectBio2["commitsBioTitle"])
    ):(
      console.log("Header for collapse commits bio button is not provided") 
    );
    $(".start-page-commitsBioShort").append(formattedHTML);
    formattedHTML = "";
    
    // table 
    objectBio2["commitsBio"].forEach(function(localItem2){
      var formattedHTMLraw = "";
      formattedHTMLraw = HTMLcommitsBioTableEntry.replace("%data-time%",localItem2["time"]);
      formattedHTMLraw = formattedHTMLraw.replace("%data-title%",localItem2["title"]);
      formattedHTMLraw = formattedHTMLraw.replace("%data-comment%",localItem2["comment"]);
      formattedHTML = formattedHTML + formattedHTMLraw;
    });
    console.log(formattedHTML);
    formattedHTML = HTMLcommitsBioTableCore.replace("%data%",formattedHTML);
    $(".start-page-commitsBioShort-collapse").append(formattedHTML);
    formattedHTML = "";
  }
}


/* PORTFOLIO OBJECT */  /* PORTFOLIO OBJECT */
/* PORTFOLIO OBJECT */  /* PORTFOLIO OBJECT */
/* PORTFOLIO OBJECT */  /* PORTFOLIO OBJECT */

var portfolio = {
  
/* ~~~~~ DATA-PROPERTIES ~~~~~~ */
/* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  "collapseHeader" : "  My beginner portfolio. + a real website used by a client!",    
  "shortStatement" : "I define a motto and a tactics to follow for each project. There is no single golden rule for all projects.&#13;&#10;"+
  "Discipline and automation first! <a href='https://github.com/AlexeySolonenko/WebsAlxs/tree/startpage' target='_blank'><mark><u><b>Check my GitHub repo for project tree, Grunt and version control.</b></u></mark></a> (note an art-direction with a portfolio photo). Since it is a small and academic project, there are no many commits, but version control is a wonderful thing saving time and facilitating collaboration!&#13;&#10;"+
  "Metrics of this site are shameful yet, but I am hard-headed during my every step to build a way to lightningize it by the time of my graduation project.",
  "portfolio" : [
    {
      "title" : "Real-world used promotion website",
      "url" : "http://studysnami.ru/index.php/ru/",
      "desc" : "Real working website promoting studying English in Malta to Russians. English version is under work. I get to like Joomla a lot while working on this website. W3 css theme.",
      "motto": "Better an egg today than a hen tomorrow.",
      "descShort" : "Language courses promotion website. Joomla. W3schools framework - built-in joomla template. My first, 'just get it work now' project. Which surprised me with visitors positive feedback and ignited to give a Front End a professional try. Thanks W3schools for their amazing work.",
      "tooltip": ""
    },
    {
      "title" : "My portfolio webiste. v1.0.1.",
      "url" : "http://tab4lioz.beget.tech/",
      "desc" : "Portfolio, skills and techniques I am learning at my Front End Development course. A tooltip-rich responsive website that I continuously developing and improving.) ",
      "motto": "'Do it right' is the shortest road.",
      "descShort" : "Portfolio, skills and techniques I am learning at my Front End Development course. I set my mind to try to enter IT occupational world due to family reasons. My goal is to build solid professional skills set, learn best practices and conquer standards. Wordpress. Bootstrap. A tooltip-rich responsive website that I am continuously developing and improving.",
      "tooltip": ""
    },
   {
      "title" : "Building Management System ",
      "url" : "",
      "desc" : "I designed and programmed a real-world industrial control system with HMI for control and supervision of a 16000 sq.m. building facilities. HMI includes multiple screen-sets for various user groups, data logging and retrieval, report printing and a bunch of handy automation tools. ",
      "motto": "Smart building starts with a smart interface that can speak to any 'non-smart' user.",
      "descShort" : "A project page is under development. ",
      "tooltip": ""
    }
  ],

/* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */
/* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */
  "displayShort" : function(portfolio){
    
    // collapsible button text
    var formattedHTML = "";
    portfolio["collapseHeader"].length > 2 ? (
      formattedHTML = HTMLportfolioShortCollapseButton.replace("%data%",portfolio["collapseHeader"])
    ):(
      console.log("Header for collapse portfolio short button is not provided") 
    );
    $(".start-page-portfolio-short").append(formattedHTML);
    formattedHTML = "";
    
    //short intro statement
    formattedHTML = HTMLportfolioShortEntryStatement.replace("%data%",portfolio["shortStatement"]);
    $(".start-page-portfolio-short-collapse").append(formattedHTML);
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

var HTMLheaderNameSmall = '<h1 data-toggle="tooltip" data-html="true" '+
                          'title="%data-tooltip%" data-trigger="manual focus hover" data-placement="auto" >%data%</h1>';
var HTMLheaderNameBig = '<h1 data-toggle="tooltip" data-html="true" '+
                        'title="%data-tooltip%" data-trigger="manual focus hover" data-placement="auto" class="text-uppercase">%data%</h1>';
var HTMLcontactShort = '<b data-toggle="tooltip" data-html=true title="%data-tooltip%"'+
                        'data-placement="auto" data-trigger="manual" class="user-welcome-tooltip">%data%</b><hr>';
var HTMLheaderRole = '<span>%data%</span><hr>';
var HTMLbioPicSmall = '<picture data-toggle="tooltip" data-html=true title="%data-tooltip%"'+
                      ' data-placement="auto" data-trigger="manual focus hover" class="img-responsive'+
                      ' img-circle center-block"><source class="img-responsive img-circle center-block" media="(max-width: 799px)" srcset="%data%">';
var HTMLbioPicLarge = '<source class="img-responsive img-circle center-block" media="(min-width: 800px)" srcset="%data%">';
var HTMLbioPicDefault = '<img class="img-responsive img-circle center-block" src="%data%"';
var HTMLbioPicAlt = ' alt="%data%" ></picture>';
var HTMLheaderIntro = '<span><b class="text-justify">%data%</b></span>';

// PORTFOLIO SHORT RAW
var HTMLportfolioShortCollapseButton = '<div class="panel cfa-button"><b>'+
    '<span class="start-page-portfolio-short-plus glyphicon glyphicon-play"></span>'+
    '<span class="start-page-portfolio-short-minus glyphicon glyphicon-triangle-bottom"></span>'+
    '%data%'+
    '</b></div>';
var HTMLportfolioShortEntryStatement = '<p class="text-danger text-justify col-xs-12">%data%</p>';
var HTMLportfolioShortEntryBox = '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">%data%</div>';
var HTMLportfolioShortEntryTitleUrl = '<div class="text-justify"><h4><a href="%data%" target="_blank">';
var HTMLportfolioShortEntryTitle ='%data%</a></h4></div>';
var HTMLportfolioShortEntryMotto ='<div class="text-justify"><mark><span><b>motto: </b></span><i>%data%</i></mark></div>';
var HTMLportfolioShortEntryDescShort ='<div class="text-justify"><span><b>About: </b></span>%data%</div>';


// COMMITS OF BIO
var HTMLcommitsBioCollapseButton = '<div class="panel cfa-button"><b>'+
    '<span class="start-page-commitsBio-plus glyphicon glyphicon-play"></span>'+
    '<span class="start-page-commitsBio-minus glyphicon glyphicon-triangle-bottom"></span>'+
    '%data%'+
    '</b></div>';
var HTMLcommitsBioTableCore='<table class="table table-bordered table-striped"><tr> <th>Time</th> <th>Title</th> <th>Comment</th></tr>%data%</table>';
var HTMLcommitsBioTableEntry='<tr> <td>%data-time%</td> <td>%data-title%</td> <td>%data-comment%</td></tr>';




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