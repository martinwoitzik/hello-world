
/*
 * GET news page.
 */

exports.index = function(req, res){
  res.render('news', {
      entries:[
          {date:"12.01.2013", content:"sldkfjsldkf jwelkrj wlejr"},
          {date:"24.03.2013", content:"Halkjwerljwlekrj wlekjr"}
      ]
  });
};

exports.show = function(req, res) {
  res.render('news/show')
}