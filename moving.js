$(document).ready(function(){
    if (screen.width >= 700){
      $("#club-side").hover(
        function(){
          $("#club-back-side").slideUp(200);
          $("#club").slideDown(200);
        },
        function(){
          $("#club").slideUp(200);
          $("#club-back-side").slideDown(200);
         }
      );
  
      $("#hack-side").hover(
        function(){
          $("#hack-back-side").slideUp(200);
          $("#hack").slideDown(200);
        },
        function(){
          $("#hack").slideUp(200);
          $("#hack-back-side").slideDown(200);
        }
      );
    }
    else {
      $("#club-back-side").slideUp(200);
      $("#club").show(200);
      $("#hack-back-side").slideUp(200);
      $("#hack").show(200);
    }
  });
  
  /* document.getElementById('hack-side').addEventListener("click", function() {
    console.log("hi");
  }) */
  