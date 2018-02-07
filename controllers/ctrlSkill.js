const skillList = function (req, res) {
    res.render('skill', {
        skillListObj: [
            {type:'Development Languages', details:'C/C++, Java Android, NodeJs / JavaScript, SQL, PHP, Ionic 3'},
            {type:'Language', details:'French, English'},
            {type:'Tools',details:'Git, Microsoft Office, Amazon AWS, Android Studio'}
        ]
    });
};

module.exports= {
    skillList
};