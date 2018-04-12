const aboutList = function(req, res){
    res.render('about', {title: 'Express'});
};

module.exports = {
    aboutList
};