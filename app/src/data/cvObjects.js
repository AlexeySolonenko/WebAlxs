
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
                  "  - to earn a Senior Web Developer title through good work.<br /br> "+
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
      "welcomeTooltip" : "<b><h4><br /br>!      CHECK TOOLTIPS!     !<br /br>"+
      "!     AND ENJOY YOUR TIME HERE!     !<br /br></h4></b>"
		},
	  "metrics": null,
	  "origin" : "Russia",
    "targetRole" : "Front End Developer",
	
  /* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */
  
  "display" : function(objectBio){
    var formattedHTML = "";
    var tempString = "";
    
    
      /* NAME     */
      objectBio.name.length > 2 ? (
       
        /* formattedHTML = HTMLheaderNameBig.replace("%data%",objectBio["name"]);*/
        formattedHTML = HTMLheaderNameBig.replace("%data%",spannifyFlying(objectBio["name"])),
        /* formattedHTML = HTMLheaderNameBig.replace("%data%",formattedHTML); */
        formattedHTML = formattedHTML.replace("%data-tooltip%",objectBio["nameTooltip"]),
        $(".start-page-id-name-big").append(formattedHTML),
        formattedHTML = "",
        formattedHTML = HTMLheaderNameSmall.replace("%data%",spannifyFlying(objectBio["name"])),
        formattedHTML = formattedHTML.replace("%data-tooltip%",objectBio["nameTooltip"]),
        $(".start-page-id-name-small").append(formattedHTML)
        ) :(  
					console.log("No name specified")
        );
              
      formattedHTML = " ";
      tempString = "";
        
      /* SHORT CONTACT INFO */
      formattedHTML = objectBio["contacts"]["email"][0] + ', ' +
        objectBio["contacts"]["mobile"]["primary"];
      formattedHTML = spannifyFlying(formattedHTML);
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
      /* formattedHTML = spannifyFlying(formattedHTML); */
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
  "collapseHeader" : "  Overview of my portfolio. Completed and ongoing projects.",    
  "shortStatement" : "Finding a balance between quality<>cost<>speed is always a challenge. However, I believe that consistency is even more important. Once key aspects of a project a defined, then they must be followed strictly and without deviations. A short motto is a of a good aid. If code reuse and quality are priorities - don't do shortcuts. If 'make it work' is a primary goal - don't fall into trimming and refactoring too much.&#13;&#10;"+
  "<a href='https://github.com/AlexeySolonenko/WebsAlxs' target='_blank'><mark><u><b>This page GitHub repo. Project tree, Grunt, version control, etc.</b></u></mark></a>&#13;&#10;",
  "portfolio" : [
    {
      "title" : "Real-world used promotion website",
      "url" : "http://studysnami.ru/index.php/ru/",
      "desc" : "Real working website promoting studying English in Malta to Russians. English version is under work. I get to like Joomla a lot while working on this website. W3 css theme.",
      "motto": "Better an egg today than a hen tomorrow.",
      "pic" : '<img src="http://tab4lioz.beget.tech/wp-content/uploads/src/img/studysnami_016_017.JPG" alt="Piece of a screenshot of a language schools promotion website.">',
      "descShort" : "Language courses promotion website. Joomla. W3schools framework atop of a built-in joomla template Protostar. User-retenting animations, transitions. Responsive and intuitive navigation.",
      "tooltip": ""
    },
    {
      "title" : "My portfolio webiste.",
      "url" : "http://tab4lioz.beget.tech/",
      "desc" : "Portfolio, skills and techniques I am learning at my Front End Development course. A tooltip-rich responsive website that I continuously developing and improving.) ",
      "motto": "'Do it right' is the shortest road.",
      "pic" : "",
      "descShort" : "This current web-page open in your browser. HTML, CSS, JavaScript, Wordpress, Bootstrap. Versatile responsive layout. Customized style built on top of a basic standard template. jQuery. Grunt-automated optimization and image-processing. Iterative parts of this webpage are built automatically using JavaScript. Aria is under development - tonnes of apologies for not having yet released it!",
      "tooltip": ""
    },
    {
      "title" : "Arcade game! (pre-release) ",
      "url" : "https://cdn.rawgit.com/AlexeySolonenko/frontend-nanodegree-arcade-game/abb76a85/app/test/index-min.html",
      "desc" : "Interactive RESPONSIVE (try with different user agents) arcade game (under speedy development). Use developer tools for best experience and the largest field. RequestAnimationFrame HTML5 canvas sprite-based game. KeyBoard + touch controls. JS+CSS for controls and interactivity. A prototype game and libraries for my oncoming projects this fall in educational fields. <a href='https://github.com/AlexeySolonenko/frontend-nanodegree-arcade-game' target='_blank'><b>GitHub repo.</b></a>. Menu structures, new types of enemies and missions, lifes and scores are coming soon. Built using JavaScript.",
      "motto": "Hero is not a noun, is an -ing verb.",
      "pic" : tools.tempVar1,
      "descShort" : "An Arcade Game. Responsive layout, both, key-board and touch-screen controls. HTML5 canvas with cashed ligth-weight sprites, OOP structured classes and objects, JavaScript, Bootstrap, jQuery. <a href='https://github.com/AlexeySolonenko/frontend-nanodegree-arcade-game' target='_blank'><b>GitHub repo.</b></a> (Under development).", 
      "tooltip": "Frogger-your-instance the Great is the last hope of his mother-planet and its scarcing natives!"
    },
    {
      "title" : "Building Management System ",
      "url" : "",
      "desc" : "I designed and programmed a real-world industrial control system with HMI for control and supervision of a 16000 sq.m. building facilities. HMI includes multiple screen-sets for various user groups, data logging and retrieval, report printing and a bunch of handy automation tools. ",
      "motto": "Smart building starts with a smart interface that can speak to any 'non-smart' user.",
      "pic" : "",
      "descShort" : "A project page is under development. HMI is a center point of this project. It provides automation tools for smart energy consumption for maintenance personnel. Supervision and troubleshooting tools for engineering. Intuitive interface for daily rooting operations that is easily handled by all sorts of staff: security, helpers, etc. ",
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
        HTMLportfolioShortEntryMotto.replace("%data%", localItem["motto"]);
      
      if(localItem["pic"]!=""){
        formattedHTML = formattedHTML + HTMLportfolioshortEntryPicBigScr.replace("%data%",localItem["pic"]);
        formattedHTML = formattedHTML + HTMLportfolioshortEntryPicSmallScr.replace("%data%",localItem["pic"]);
        
      };
      formattedHTML = formattedHTML + HTMLportfolioShortEntryDescShort.replace("%data%",localItem["descShort"]);
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




