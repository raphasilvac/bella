
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('home', { title: 'Express' })
};

exports.store = function(req, res){
  res.render('store', { title: 'Express' })
};

exports.cart = function(req, res){
  res.render('cart', { title: 'Express' })
};