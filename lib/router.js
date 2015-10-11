Router.configure({
  layoutTemplate: "masterLayout",
  notFoundTemplate: "404"
});
Router.route('/', function(){
  this.render('index');
},
{
  name: 'index'
});
Router.route('/emails', function(){
  this.render('showEmails');
},
{
  name: 'showEmails'

});
