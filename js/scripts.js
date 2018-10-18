
var voteAge = function(age) {
    if(age >= 18) {
      return true;
    }else{
      return false;
    }
  }
  
// var stance = function(abortion) {
//     if (abortion === forIt && !==againstIt && !==noOpinion) [
//       return true;
//     }else if (true) {
//
//     }
//     ]
// }



$(document).ready(function() {
  $("form#age").submit(function(event) {
    var inputOver18 = parseInt($("input#inputAge").val());
    var result = voteAge(inputOver18);

    if(result === true) {
      $(".overAge").show();
      $(".underAge").hide();
      $("#meter").show();
    } else {
      $(".underAge").show();
      $(".overAge").hide();
      $("#meter").hide();
    }

    event.preventDefault();

  });
});
