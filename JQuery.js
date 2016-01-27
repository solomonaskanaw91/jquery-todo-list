
var newThing = $("<li></li>");

$('#name-form').on('submit', function(e) {                      
  e.preventDefault();
  var $name = $('#name-form input').val();
  console.log($name);

  $('#name-form input').val(''); 
  $('ul').append('<li>' + "<button>"  + "X"+ "</button>"+ $name + '</li>');
});

$("ul").on("click", "li button", function() {
  $(this).parent().remove();
})






