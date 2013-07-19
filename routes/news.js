
/*
 * GET news page.
 */

var entries = [
    {date:"12.01.2013", content:"sldkfjsldkf jwelkrj wlejr"},
    {date:"24.03.2013", content:"Halkjwerljwlekrj wlekjr"}
];

exports.index = function(req, res){
  var i = req.i18n;
  var title = i.t('app.title');
  res.render('news/index', {
      entries:entries
  });
};

exports.show = function(req, res) {
  res.render('news/show', {
      title:entries[ req.params.id ].date,
      content:entries[ req.params.id ].content
  });
}