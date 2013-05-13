
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

exports.about = function(req, res){
  res.render('about', { title: 'Express' })
};

exports.account = function(req, res){
  res.render('account', { title: 'Express' })
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Express' })
};