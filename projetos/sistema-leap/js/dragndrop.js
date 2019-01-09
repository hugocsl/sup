$(function() {
    $( "ul.droptrue" ).sortable({
      connectWith: ".js-sort-list"
    });
 
    $( "ul.dropfalse" ).sortable({
      connectWith: ".js-sort-list",
      //dropOnEmpty: false
    });
 
    $( "#sortable1" ).disableSelection();
  });