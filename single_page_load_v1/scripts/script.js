jQuery(document).ready(function($) {
    //version tag for easy observation
    var ver = "load_v2"
    $("#version").text(ver);
    console.log("page loaded");



  $("#aboutme").on("click", function(e) {
    console.log("aboutme clicked");
    $("#main_container").load("aboutme.html");
  });
  $("#education").on("click", function(e) {
    console.log("education clicked");
    $("#main_container").load("education.html");
  });
  $("#experience").on("click", function(e) {
    console.log("experience clicked");
    $("#main_container").load("experience.html");
  });
  $("#project1").on("click", function(e) {
    console.log("project1 clicked");
    $("#main_container").load("project1.html");
  });
  $("#project2").on("click", function(e) {
    console.log("project2 clicked");
    $("#main_container").load("project2.html");
  });
  $("#project3").on("click", function(e) {
    console.log("project3 clicked");
    $("#main_container").load("project3.html");
  });
  $("#project4").on("click", function(e) {
    console.log("project4 clicked");
    $("#main_container").load("project4.html");
  });
  $("#contact").on("click", function(e) {
    console.log("contact clicked");
    $("#main_container").load("contact.html");
  });
  $("#other").on("click", function(e) {
    console.log("other clicked");
    $("#main_container").load("other.html");
  });
  $("#other1").on("click", function(e) {
    console.log("other1 clicked");
    $("#main_container").load("other1.html");
  });
  $("#other2").on("click", function(e) {
    console.log("other2 clicked");
    $("#main_container").load("other2.html");
  });
  
});
