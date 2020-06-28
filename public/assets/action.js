// jQuery that will "listen" to the html niceSurvey.html
$(document).ready(function(){

  $('form').on('submit', function(){
      
      // var item = $('form input');
      // console.log(item.serializeArray());

      $.ajax({
        type: 'POST',
        url: '/niceSurvey',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button red, disabled and saying Thank you
          $("#Submit").css("background-color", "#fff");
          $("#Submit").css("color", "#457b9d");
          $("#Submit").prop("disabled", "true");
          $("#Submit").css("content", "test");

          $("#Submit").text("Thank you!");

        }
      });
      return false;
  });
});
