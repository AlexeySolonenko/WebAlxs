/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */
/* HEADER + BIO OBJECT */  /* HEADER + BIO OBJECT */

var bio = {
  
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
      "name" : "",
      "level" : ""
    }
	  ],
	  "statement" : "Engineer Transiting to Front-End Web Development",
    "photoUrlSmall" : "http://tab4lioz.beget.tech/wp-content/uploads/src/img/Alexey-Solonenko-Photo-mir.jpg",
	  "photoUrlLarge" : "http://tab4lioz.beget.tech/wp-content/uploads/src/img/Alexey-Solonenko-Photo.jpg",
    "photoUrlAlt" :"Profile photo. Baltic grey haired male around 30. Medium weight. 190 cm or 6.23 feet. Fragile build. Checkered shirt. Black and white photo. ",
    "photoTooltip" :
      "Responsive images using art direction and srcset.&#13;&#10;"+
      "Zoom (if your browser supports) or use dev tools to test.&#13;&#10;"+
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
      formattedHTML = objectBio["targetRole"] + ':';
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




