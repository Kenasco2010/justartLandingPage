Router.configure({
    layoutTemplate: "masterLayout",
    notFoundTemplate: "404"
});
Router.route('/', function () {
        this.render("index");
    },
    {
        name: "index"
    });

// Router.route('/setup-company-profile', function() {
//     this.render("setUpCompanyProfile");
// },
//     {
//         name:"setUpCompanyProfile"
// });


// Router.route('/my-dashboard', function() {
//         this.render("companyDashboard");
//     },
//     {
//         name:"companyDashboard",
//         data: function(){
//             return{
//                 companyinformation: Companies.find().fetch()
//             }
//         }
//     });
// Router.route("/sign-up", function () {
//     this.route("signup");
// },
//     {
//         name: "signup"
// });
// Router.route("/sign-in", function () {
//         this.route("signin");
//     },
//     {
//         name: "signin"
//     });
