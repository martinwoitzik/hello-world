
/*
 * GET login page.
 */

exports.login = function(req, res){
  res.render('login/index', {
      username: req.param('name'),
      password: req.param('password')
  });
};