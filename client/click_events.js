Template.index.events({
  'click #firstSuscribeNow' : function(event) {
    event.preventDefault();
    var firstSectionEmail = $("#firstSectionEmail").val();
    // Do form validation
    var data = {
      firstSectionEmail: firstSectionEmail.value,

    };

    firstSectionEmail.value="";

    Emails.insert({
      email: firstSectionEmail

    });
  // Clear form
  $("#firstSectionEmail").val('');
  swal("Thank you", "We will notify you shortly!", "success");
},
'click #secondSlideSuscribeNow' : function(event) {
  event.preventDefault();
  var secondSlideEmail = $("#secondSlideEmail").val();
    // Do form validation
    var data = {
      secondSlideEmail: secondSlideEmail.value,

    };

    secondSlideEmail.value="";

    Emails.insert({
      email: secondSlideEmail

    });
  // Clear form
  $("#secondSlideEmail").val('');
  swal("Thank you", "We will notify you shortly!", "success");
},
'click #secondSuscribeNow': function (event) {
  event.preventDefault();
  var secondSectionEmail = $("#secondSectionEmail").val();
    // Do form validation
    var data = {
      secondSectionEmail: secondSectionEmail.value,

    };

    secondSectionEmail.value="";

    Emails.insert({
      email: secondSectionEmail

    });
  // Clear form
  $("#secondSectionEmail").val('');
  swal("Thank you", "We will notify you shortly!", "success");
},

'click #thirdSuscribeNow': function (event) {
  event.preventDefault()
  // $(".thirdEmailForm").validate();
  var thirdSectionEmail = $("#thirdSectionEmail").val();
  if (thirdSectionEmail == null){
    swal("Oops...", "Something went wrong!", "error");

  }
    // Do form validation
    var data = {
      thirdSectionEmail: thirdSectionEmail.value,

    };

    thirdSectionEmail.value="";

    Emails.insert({
      email: thirdSectionEmail

    });
  // Clear form
  $("#thirdSectionEmail").val('');
  swal("Thank you", "We will notify you shortly!", "success");
}
});
