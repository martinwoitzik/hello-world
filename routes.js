module.exports = function (app) {

    var routes = require('./routes')
      , news = require('./routes/news')
      , login = require('./routes/login')
      , user = require('./routes/user');

    app.get('/', routes.index);
    app.get('/news', news.index);
    app.get('/news/:id', news.show)
    app.get('/login', login.login);
    app.get('/user', user.list);

    // force an internal-server-error 500
    app.get('/force-error', function(req, res) {
//      res.download('sldkfjslkdfj');
        res.render('the-unknown-view');
    });

    // error 404 route
    app.get('/404', function(req, res) {
//        res.status(404);
        res.render('error-pages/404', 404);
    });

    // error 500 route
    app.get('/500', function(req, res) {
        res.status(500);
        res.render('error-pages/500', {error:encodeURI('Error code: 500')});
    });

};