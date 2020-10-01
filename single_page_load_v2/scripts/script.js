jQuery(document).ready(function($) {
    //version tag for easy observation
    var ver = "load_v2"
    $("#version").text(ver);



  $("#header a").on("click", function(e) {
    var clickedID = e.target.id;
    console.log("ClickedID - "+clickedID);
    $("#main_container").load(clickedID + ".html");
  });


});
