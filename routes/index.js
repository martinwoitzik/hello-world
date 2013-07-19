
/*
 * GET home page.
 */

exports.index = function(req, res){

    var i = req.i18n;

    res.render('index', {
        title: i.t('app.title'),
        showHeader: true
    });
};