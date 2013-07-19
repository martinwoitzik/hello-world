
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , news = require('./routes/news')
  , login = require('./routes/login')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

var less = require('less-middleware');

var i18n = require("i18next");

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(i18n.handle);
app.use(app.router);
app.use(less({
    src: __dirname + '/private',
    dest: __dirname + '/public/stylesheets',
    prefix: '/stylesheets',
    compress: false
}));
app.use(express.static(path.join(__dirname, 'public')));

i18n.init({
    lng:'en',
    supportedLngs: ['en', 'de'],
    fallbackLng: 'en',
    resSetPath: 'locales/__lng__/translation.json',
    saveMissing: true,
    detectLngFromPath: 0
});

// development only
/*
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
*/

app.get('/', routes.index);
app.get('/news', news.index);
app.get('/news/:id', news.show)
app.get('/login', login.login);
app.get('/user', user.list);

app.get('/force-error', function(req, res) {
//    res.download('sldkfjslkdfj');
    res.render('the-unknown-view');
});


// error 404 route
app.get('/404', function(req, res) {
//    res.status(404);
    res.render('error-pages/404', 404);
});
// error 500 route
app.get('/500', function(req, res) {
    res.status(500);
    res.render('error-pages/500', {error:encodeURI('Error code: 500')});
});
// automatic 404 error-handler
app.use(function(req, res, next){
    res.render('error-pages/404', 404);
});
// global error handler
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('error-pages/500', {error:encodeURI(err)});
});


i18n.registerAppHelper(app)
    .serveClientScript(app)
    .serveDynamicResources(app)
    .serveMissingKeyRoute(app)
    .serveChangeKeyRoute(app)
    .serveRemoveKeyRoute(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

