function displayWork(){work.jobs.forEach(function(t){$("#workExperience").append(HTMLworkStart);e=HTMLworkEmployer.replace("%data%",t.employer);$("#workExperience").append(e),console.log(e);e=HTMLworkTitle.replace("%data%",t.position);$("#workExperience").append(e),console.log(e);e=HTMLworkDates.replace("%data%",t.years);$("#workExperience").append(e),console.log(e);e=HTMLworkLocation.replace("%data%",t.location);$("#workExperience").append(e),console.log(e);var e=HTMLworkDescription.replace("%data%",t.status);$("#workExperience").append(e),console.log(e);var o=HTMLworkEmployer.replace("%data%",t.employer)+" "+HTMLworkTitle.replace("%data%",t.position);console.log(o),$(".work-entry:last").append(o)})}var bio={name:"Alexey Solonenko",nameTooltip:"Name tooltip",skills:[{name:"HTML",level:"+"},{name:"JS",level:"+"},{name:"CSS",level:"++"},{name:"Git",level:""},{name:"Grunt",level:""},{name:"Responsive",level:""},{name:"jQuery",level:""},{name:"Bootstrap",level:""},{name:"Industrial HMI background",level:""}],commitsBio:[{time:"2017",title:"fix: Start Front End Development Course",comment:"Started my course in March/April. Welcome to my portfolio website! )"},{time:"2017",title:"refactor: Make first working website.",comment:"Made first working website for a real client. Got surprised by result and feedback. Interrogated IT acquaintances and decided to give a try to enter IT field."},{time:"2015",title:"test: Move to Malta",comment:"Oil&gas collapse laid us off, but we ended happily up in Malta."},{time:"2015",title:"docs: Oil industry fall-down.",comment:"In 4.5 years earend two promotions, get employed by a Forbes super-major, spent 65% of time away from home on business trips. Still got laid off together with other thousands."},{time:"<b>2012 10 27</b>",title:"<b>BEST: MARRIED LIDDY</b>",comment:"<b>Till today is second to init my achievement ! )</b>"},{time:"2011",title:"feat: Join oil&gas industry",comment:"Started oil&gas career at an international project."},{time:"2009",title:"test: Construction and project support",comment:"Joined a Syrian-led ambitious start-up within commercial construction"},{time:"2007",title:"style:Trimmed degree with a new haircut",comment:"Graduated as Industrial Automation Engineer. Civil-trained reserve (operations support) army officer. Landed my first electronics technician job(s)."},{time:"2002",title:"fix: Prepare for uni. Trim, feed, groom, train, and ^fix",comment:"First significant training and attempts in branching."},{time:"1985",title:"init",comment:"Parents made the best so far commit."}],commitsBioTitle:"  Alexey['commits'].display() - my bio in few words.",statement:"Engineer Transiting to Front-End Web Development",photoUrlSmall:"http://tab4lioz.beget.tech/wp-content/uploads/src/img/Alexey-Solonenko-Photo-mir.jpg",photoUrlLarge:"http://tab4lioz.beget.tech/wp-content/uploads/src/img/Alexey-Solonenko-Photo.jpg",photoUrlAlt:"Profile photo. Baltic grey haired male around 30. Medium weight. 190 cm or 6.23 feet. Fragile build. Checkered shirt. Black and white photo. ",photoTooltip:"Responsive images using art direction and srcset.&#13;&#10;Change window size (if your browser supports) or use dev tools to test.&#13;&#10;Also I am using proven framework media-queries &#13;&#10;based tools for older browsers. Grunt automated &#13;&#10; processing and optimization.",contacts:{country:"Malta, EU",skype:"alexey_solonenko",mobile:{primary:"+35699703115",secondary:"+35699503677"},email:["ot2@bk.ru","tab4@live.com"],website:"http://tab4lioz.beget.tech",city:"L-Imsida"},metrics:null,origin:"Russia",targetRole:"Front End Developer",display:function(t){var e="";t.name.length>2?(e=HTMLheaderNameSmall.replace("%data%",t.name),e=e.replace("%data-tooltip%",t.nameTooltip),$(".start-page-id-name-small").append(e),console.log(e),e=" ",e=HTMLheaderNameBig.replace("%data%",t.name),e=e.replace("%data-tooltip%",t.nameTooltip),$(".start-page-id-name-big").append(e),console.log(e)):console.log("No name specified"),e="",e=t.contacts.email[0]+", "+t.contacts.mobile.primary,e=HTMLcontactShort.replace("%data%",e),$(".start-page-id-intro").prepend(e),e="",e=t.targetRole+" : ",t.skills.forEach(function(t){t.name.length>1?e=e+t.name+", ":console.log("This skill is not defined")}),e=e.slice(0,e.length-2),e+=".",e=HTMLheaderIntro.replace("%data%",e),$(".start-page-id-intro").append(e),e=" ",t.photoUrlSmall.length>2?(e=HTMLbioPicSmall.replace("%data%",t.photoUrlSmall),e=e.replace("%data-tooltip%",t.photoTooltip)):console.log("No small bio photo specified"),t.photoUrlLarge.length>2?e+=HTMLbioPicLarge.replace("%data%",t.photoUrlLarge):console.log("No large bio photo specified"),e+=HTMLbioPicDefault.replace("%data%",t.photoUrlLarge),t.photoUrlAlt.length>2?e+=HTMLbioPicAlt.replace("%data%",t.photoUrlAlt):console.log("No alt text specified specified"),console.log(e),console.log(e),$(".start-page-id-CVphoto").append(e)},displayCommits:function(t){var e="";t.commitsBioTitle.length>2?e=HTMLcommitsBioCollapseButton.replace("%data%",t.commitsBioTitle):console.log("Header for collapse commits bio button is not provided"),$(".start-page-commitsBioShort").append(e),e="",t.commitsBio.forEach(function(t){var o="";o=(o=(o=HTMLcommitsBioTableEntry.replace("%data-time%",t.time)).replace("%data-title%",t.title)).replace("%data-comment%",t.comment),e+=o}),console.log(e),e=HTMLcommitsBioTableCore.replace("%data%",e),$(".start-page-commitsBioShort-collapse").append(e),e=""}},portfolio={collapseHeader:"  My beginner portfolio. + a real website used by a client!",shortStatement:"I define a motto and a tactics to follow for each project. There is no single golden rule for all projects.&#13;&#10;Discipline and automation first! <a href='https://github.com/AlexeySolonenko/WebsAlxs/tree/startpage' target='_blank'><mark><u><b>Check my GitHub repo for project tree, Grunt and version control.</b></u></mark></a> (note an art-direction with a portfolio photo). Since it is a small and academic project, there are no many commits, but version control is a wonderful thing saving time and facilitating collaboration!&#13;&#10;Metrics of this site are shameful yet, but I am hard-headed during my every step to build a way to lightningize it by the time of my graduation project.",portfolio:[{title:"Real-world used promotion website",url:"http://studysnami.ru/index.php/ru/",desc:"Real working website promoting studying English in Malta to Russians. English version is under work. I get to like Joomla a lot while working on this website. W3 css theme.",motto:"Better an egg today than a hen tomorrow.",descShort:"Language courses promotion website. Joomla. W3schools framework - built-in joomla template. My first, 'just get it work now' project. Which surprised me with visitors positive feedback and ignite to give a Front End a professional try. Thanks W3schools for their amazing work.",tooltip:""},{title:"My portfolio webiste. v1.0.1.",url:"http://tab4lioz.beget.tech/",desc:"Portfolio, skills and techniques I am learning at my Front End Development course. A tooltip-rich responsive website that I continuously developing and improving.) ",motto:"'Do it right' is the shortest road.",descShort:"Portfolio, skills and techniques I am learning at my Front End Development course. I set my mind to try to enter IT occupational world due to family reasons. My goal is to build solid professional skills set, learn best practices and conquer standards. Wordpress. Bootstrap. A tooltip-rich responsive website that I continuously developing and improving.)",tooltip:""}],displayShort:function(t){var e="";t.collapseHeader.length>2?e=HTMLportfolioShortCollapseButton.replace("%data%",t.collapseHeader):console.log("Header for collapse portfolio short button is not provided"),$(".start-page-portfolio-short").append(e),e="",e=HTMLportfolioShortEntryStatement.replace("%data%",t.shortStatement),$(".start-page-portfolio-short-collapse").append(e),e="",t.portfolio.forEach(function(t){e=HTMLportfolioShortEntryTitleUrl.replace("%data%",t.url)+HTMLportfolioShortEntryTitle.replace("%data%",t.title)+HTMLportfolioShortEntryMotto.replace("%data%",t.motto)+HTMLportfolioShortEntryDescShort.replace("%data%",t.descShort),e=HTMLportfolioShortEntryBox.replace("%data%",e),$(".start-page-portfolio-short-collapse").append(e),e=""})}},work={jobs:[{status:"current",position:"Electrical and Instrument Engineer",employer:"AIM Enterprises \n",years:"08.2015 - current",location:"Paola, Malta\n"},{status:"former",position:"Senior Maintenance Electrical Engineer",employer:"Total SA",years:"03.2013 - 08.2015",location:"Kharyaga, Arctic, Russia"},{status:"former",position:"Commissioning Lead Electrical Engineer",employer:"Dietsmann Technologies Ltd.",years:"04.2011 - 11.2012",location:"Kharyaga, Arctic, Russia"},{status:"current",position:"Instrumentation Engineer",employer:"Inzhener Ltd.",years:"07.2009 - 03.2011",location:"Krasnoyarsk, Russia"},{status:"current",position:"Automation Technician",employer:"MT-Tekhno Ltd.",years:"12.2007 - 03.2009",location:"Krasnoyarsk, Russia"}]},education={CPD:[{name:"Udacity",major:"Front-End Web Developer",years:"04.2017 - current",city:"Web"},{name:"George Brown College",major:"PLC Technician, certificate",years:"2012",city:"Toronto"}],schools:[{name:"Siberian Federal University",major:"Industrial Control Systems",years:"2002-2007",location:"Krasnoyarsk"},{name:"Siberian Federal University",major:"English Language Translator",years:"2003-2007",location:"Krasnoyarsk"},{name:"Siberian Federal University",major:"Reserve Army Officer, munitions.",years:"2003-2007",location:"Krasnoyarsk"}]},projects={records:[{title:"Language school website",dates:"",description:"Website that I made myself",image:"NA",url:""},{title:"Kharyaga Phase 4",dates:"",description:"30 MW expansion of a 30kbpd oil&gas facility",image:"NA",url:""},{title:"Kharyaga Phase 3",dates:"",description:"Commissioned of electrical systems of a remote 10 kbpd pad",image:"NA",url:""}],display:function(t){t.records.forEach(function(t){$("#main").append(HTMLprojectStart);var e=HTMLprojectTitle.replace("%data%",t.title);$("#projects").append(e),e=HTMLprojectDates.replace("%data%",t.dates),$("#projects").append(e),e=HTMLprojectDescription.replace("%data%",t.description),$("#projects").append(e),t.image.length>2?(e=HTMLprojectImage.replace("%data%",t.image),$("#projects").append(e)):console.log("No image specified")})}},HTMLheaderNameSmall='<h1 data-toggle="tooltip" title="%data-tooltip%" data-placement="bottom">%data%</h1>',HTMLheaderNameBig='<h1 data-toggle="tooltip" title="%data-tooltip%" data-placement="bottom" class="text-uppercase">%data%</h1>',HTMLcontactShort="<b>%data%</b><hr>",HTMLheaderRole="<span>%data%</span><hr>",HTMLbioPicSmall='<picture data-toggle="tooltip" title="%data-tooltip%" class="img-responsive img-circle center-block"><source class="img-responsive img-circle center-block" media="(max-width: 799px)" srcset="%data%">',HTMLbioPicLarge='<source class="img-responsive img-circle center-block" media="(min-width: 800px)" srcset="%data%">',HTMLbioPicDefault='<img class="img-responsive img-circle center-block" src="%data%"',HTMLbioPicAlt=' alt="%data%" ></picture>',HTMLheaderIntro='<span><b class="text-justify">%data%</b></span>',HTMLportfolioShortCollapseButton='<div class="panel cfa-button"><b><span class="start-page-portfolio-short-plus glyphicon glyphicon-play"></span><span class="start-page-portfolio-short-minus glyphicon glyphicon-triangle-bottom"></span>%data%</b></div>',HTMLportfolioShortEntryStatement='<p class="text-danger text-justify col-xs-12">%data%</p>',HTMLportfolioShortEntryBox='<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">%data%</div>',HTMLportfolioShortEntryTitleUrl='<div class="text-justify"><h4><a href="%data%" target="_blank">',HTMLportfolioShortEntryTitle="%data%</a></h4></div>",HTMLportfolioShortEntryMotto='<div class="text-justify"><mark><span><b>motto: </b></span><i>%data%</i></mark></div>',HTMLportfolioShortEntryDescShort='<div class="text-justify"><span><b>About: </b></span>%data%</div>',HTMLcommitsBioCollapseButton='<div class="panel cfa-button"><b><span class="start-page-commitsBio-plus glyphicon glyphicon-play"></span><span class="start-page-commitsBio-minus glyphicon glyphicon-triangle-bottom"></span>%data%</b></div>',HTMLcommitsBioTableCore='<table class="table table-bordered table-striped"><tr> <th>Time</th> <th>Title</th> <th>Comment</th></tr>%data%</table>',HTMLcommitsBioTableEntry="<tr> <td>%data-time%</td> <td>%data-title%</td> <td>%data-comment%</td></tr>",HTMLcontactGeneric='<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',HTMLmobile='<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',HTMLemail='<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',HTMLtwitter='<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',HTMLgithub='<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',HTMLblog='<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',HTMLlocation='<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',HTMLwelcomeMsg='<span class="welcome-message">%data%</span>',HTMLskillsStart='<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>',HTMLskills='<li class="flex-item"><span class="white-text">%data%</span></li>',HTMLworkStart='<div class="work-entry"></div>',HTMLworkEmployer='<a href="#">%data%',HTMLworkTitle=" - %data%</a>",HTMLworkDates='<div class="date-text">%data%</div>',HTMLworkLocation='<div class="location-text">%data%</div>',HTMLworkDescription="<p><br>%data%</p>",HTMLprojectStart='<div class="project-entry"></div>',HTMLprojectTitle='<a href="#">%data%</a>',HTMLprojectDates='<div class="date-text">%data%</div>',HTMLprojectDescription="<p><br>%data%</p>",HTMLprojectImage='<img src="%data%">',HTMLschoolStart='<div class="education-entry"></div>',HTMLschoolName='<a href="#">%data%',HTMLschoolDegree=" -- %data%</a>",HTMLschoolDates='<div class="date-text">%data%</div>',HTMLschoolLocation='<div class="location-text">%data%</div>',HTMLschoolMajor="<em><br>Major: %data%</em>",HTMLonlineClasses="<h3>Online Classes</h3>",HTMLonlineTitle='<a href="#">%data%',HTMLonlineSchool=" - %data%</a>",HTMLonlineDates='<div class="date-text">%data%</div>',HTMLonlineURL='<br><a href="#">%data%</a>',internationalizeButton="<button>Internationalize</button>",googleMap='<div id="map"></div>';displayWork(),bio.display(bio),portfolio.displayShort(portfolio),bio.displayCommits(bio),$(document).ready(function(){$(".start-page-portfolio-short-minus").css("display","inline"),$(".start-page-portfolio-short-plus").css("display","none"),$(".start-page-commitsBio-minus").css("display","none"),$(".start-page-commitsBio-plus").css("display","inline"),$('[data-toggle="tooltip"]').tooltip()}),$(".start-page-portfolio-short").click(function(){$(".start-page-portfolio-short-collapse").is(":visible")?($(".start-page-portfolio-short-minus").css("display","none"),$(".start-page-portfolio-short-plus").css("display","inline")):($(".start-page-portfolio-short-minus").css("display","inline"),$(".start-page-portfolio-short-plus").css("display","none"))}),$(".start-page-commitsBioShort").click(function(){$(".start-page-commitsBioShort-collapse").is(":visible")?($(".start-page-commitsBio-minus").css("display","none"),$(".start-page-commitsBio-plus").css("display","inline")):($(".start-page-commitsBio-minus").css("display","inline"),$(".start-page-commitsBio-plus").css("display","none"))});