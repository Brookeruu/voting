
var voteAge = function(age) {
    if(age >= 18) {
      return true;
    }else{
      return false;
    }
  }




$(document).ready(function() {
  $("form#age").submit(function(event) {
    var inputOver18 = parseInt($("input#inputAge").val());
    var result = voteAge(inputOver18);

    if(result === true) {
      $(".overAge").show();
      $(".underAge").hide();
    } else {
      $(".underAge").show();
        $(".overAge").hide();
    }

    event.preventDefault();

  });
});
