    function spannifyFlying(string){
      var spannified = "";
      for(var i=0,j=0;i<string.length;i++){
        (j>9)&&(j=0);
        spannified = spannified +
        '<span class="user-span-flies-left'+j+' user-span-flies-left-start">'+
        string.charAt(i)+'</span>';
        j++;
      };
      return spannified;
    }; 
    
