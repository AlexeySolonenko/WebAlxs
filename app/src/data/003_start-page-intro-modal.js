
/* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   
/* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   
/* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   

var modalIntro = {

  /* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  /* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  
  'title' : 'PRODUCTIVE AND DILIGENT FRONT-END DEVELOPER',  
  'message' : 
    '<p>Welcome to my portfolio webpage. <mark><b>THANK YOU</b></mark> very much for your'+
    'time and attention provided for visiting.</p>'+
    '<br /br><p>One look <span class="glyphicon glyphicon-eye-open"></span> may be worth a 1000'+
    ' words <span class="glyphicon glyphicon-earphone"></span>. <code>One line of code</code> may be worth a day of watching.'+
    ' That is what my page is about.</p>'+
    '<p>Please, refer to tooltips detailing the story.</p>'+
    '<br /br><p>If you are a tech, please, go straight to dev tools and git repos (since everything is <code>'+
    'uglified</code>).',
  /* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */

  'build' : function(objectModalIntro){
    var formattedHTML = HTMLmodalIntroTitle.replace('%data%',objectModalIntro['title']);
    $('.user-modal-intro .modal-title').append(formattedHTML);
    formattedHTML = "";
    formattedHTML = HTMLmodalIntroBody.replace('%data%',objectModalIntro['message']);
    $('.user-modal-intro .modal-body').append(formattedHTML);
    
  }
  
};