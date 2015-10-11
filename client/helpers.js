Template.showEmails.helpers({
  listOfAllEmails: function () {
    return Emails.find({})
  }
});

Template.showEmails.helpers({
  countEmails: function () {
    return Emails.find().count()
  }
});
