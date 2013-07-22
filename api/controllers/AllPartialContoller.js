module.exports = {
//    profile: function (req,res) {


    profile: function (req,res) {
        console.log('us ', req)
        var username = req.param('username');
        if (err) return res.send(err,500);
        res.view({ user:'partials/partial1'} );

//        User.findByUsername(username).done(function (err, user) {
//            if (err) return res.send(err,500);
//            res.view({ user: user });
//        });
    }


};