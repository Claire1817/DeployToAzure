const contactList = function (req, res) {
    res.render('contact', {
        information: [
            {type:'Name', content:'Claire Gizard'},
            {type:'Address', content:'8 Suonotkontie, 00630 Helsinki'},
            {type:'Country', content:'Finlande'},
            {type:'Phone number', content:'+358 40 334424S'},
            {type:'Email address', content:'claire.1817@hotmail.fr'},
            {type:'Github link', content:'https://github.com/ClaireGizard'},
            {type:'Linkedin link', content:'https://fr.linkedin.com/in/claire-gizard-88bb68113'},

        ]
    });
};

module.exports= {
    contactList
};
