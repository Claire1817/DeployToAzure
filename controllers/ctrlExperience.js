const experienceList = function (req, res) {
    res.render('experience', {
        experienceListObj: [
            {year:'October 2016 - August 2016', title:'PayMytable Developper - (Part-time and full time)'},
            {year:'July 2015 - December 2015', title:'Centreon - Web Developer'},
            {year:'July 2015 - August 2015', title:'La Poste - Postman'}
        ]
    });
};

module.exports= {
    experienceList
};