
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
      title: 'Meine kleine Welt App',
      listOfNumbers: ['zwei', 'eins', 'vier', 'drei'],
      showHeader: false
  });
};