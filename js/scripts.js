
var voteAge = function(age) {
    if(age >= 18) {
      return true;
    }else{
      return false;
    }
  }

// var proAbortion = function()
//



$(document).ready(function() {
  $("form#age").submit(function(event) {
    var inputOver18 = parseInt($("input#inputAge").val());
    var result = voteAge(inputOver18);
    var politicalView = $("input:radio[name=abortion]:checked").val();

    if(result) {
      $(".overAge").show();
      $(".underAge").hide();
      $("#meter").show();
    } else {
      $(".underAge").show();
      $(".overAge").hide();
      $("#meter").hide();
    }

      if(politicalView === "option1") {
        $("p#liberal").show();
        $("p#conservative").hide();
        $("p#moderate").hide();
      }
      if(politicalView === "option2") {
        $("p#conservative").show();
        $("p#liberal").hide();
        $("p#moderate").hide();
      }
      if(politicalView === "option3") {
        $("p#moderate").show();
        $("p#conservative").hide();
        $("p#liberal").hide();
      }

    event.preventDefault();

  });
});












// var stance = function(abortion) {
//     if (abortion === forIt && !==againstIt && !==noOpinion) [
//       return true;
//     }else if (true) {
//
//     }
//     ]
// }
