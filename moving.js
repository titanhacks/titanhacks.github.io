$(document).ready(function(){
    if (screen.width >= 700){
      $("#club-side").hover(
        function(){
          $("#club-back-side").slideUp(300);
          $("#club").slideDown(300);
        },
        function(){
          $("#club").slideUp(300);
          $("#club-back-side").slideDown(300);
         }
      );
  
      $("#hack-side").hover(
        function(){
          $("#hack-back-side").slideUp(300);
          $("#hack").slideDown(300);
        },
        function(){
          $("#hack").slideUp(300);
          $("#hack-back-side").slideDown(300);
        }
      );
    }
    else {
      $("#club-back-side").slideUp(300);
      $("#club").show(300);
      $("#hack-back-side").slideUp(300);
      $("#hack").show(300);
    }
  });
  
  /* document.getElementById('hack-side').addEventListener("click", function() {
    console.log("hi");
  }) */
  