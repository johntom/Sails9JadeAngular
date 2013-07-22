/**
 * FooController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.

 exports.partials = function (req, res) {
    console.log('export.partials, user:', req.session.user_id);
     var name = req.params.name;
     res.render('partials/' + name,{username: req.session.user_id});
};
 */

module.exports = {

  //* e.g.
    index: function (req, res) {
        var name = req.route.path;
        var partials = req.param('partials');
        console.log('partials ',partials);
        var n=name.replace("/partials","partials");
       // console.log('name ',n,req.param,foo);
      //  console.log('name ',req.param.params.name);

        res.render(n);

        //res.send('hello index world !');
       // res.send('partials/partial1');
        //var username = req.param('username');
        //if (err) return res.send(err,500);
        //res.view({ user:'partials/'+username} );

    },
    index2: function (req, res) {
        var name = req.route.path;
        var n=name.replace("/partials","partials");
        console.log('index2-name: ',n);
        res.render(n);
    },
  sayHello: function (req, res) {
    res.send('say hello world!');
  }
  //
  

};

module.exports.blueprints = {

    // Expose a route for every method,
    // e.g.
    //	`/auth/foo` => `foo: function (req, res) {}`
    actions: true,


    // Expose a RESTful API, e.g.
    //	`post /auth` => `create: function (req, res) {}`
    rest: true,


    // Expose simple CRUD shortcuts, e.g.
    //	`/auth/create` => `create: function (req, res) {}`
    // (useful for prototyping)
    shortcuts: true

};
