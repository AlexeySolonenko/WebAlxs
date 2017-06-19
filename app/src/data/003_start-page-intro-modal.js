
/* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   
/* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   
/* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   /* INTRO MODAL OBJECT */   

var modalIntro = {

  /* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  /* ~~~~~ DATA-PROPERTIES ~~~~~~ */
  
  'title' : 'WELCOME TO ALEXEY SOLONENKO PORTFOLIO WEBPAGE',  
  'message' : 
    '<p>This page is built dynamically from multiple files. Style, mark-up and data are combined and optimized with help'+
      'of Grunt task automation and Javascript.</p>'+
    '<br /br><p>This page shows and explains various <b>Front End Techniques</b> I am learning and applying at my mini-degree'+
      'Front End Development course.</p>'+
    '<br /br><p>As well it lists my small but growing junior portfolio. Hope, you enjoy your time here!.</p>'+
    '<br /br><p>Please, refer to tooltips detailing individual elements. Src and test(s) are available on GitHub as per link below.</p>',
  /* ~~~~~ FUNCTIONS-METHODS ~~~~~~ */

  'build' : function(objectModalIntro){
    var formattedHTML = HTMLmodalIntroTitle.replace('%data%',objectModalIntro['title']);
    $('.user-modal-intro .modal-title').append(formattedHTML);
    formattedHTML = "";
    formattedHTML = HTMLmodalIntroBody.replace('%data%',objectModalIntro['message']);
    $('.user-modal-intro .modal-body').append(formattedHTML);
    
  }
  
};