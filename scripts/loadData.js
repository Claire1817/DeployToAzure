
db.dropDatabase();

db.contact.save( {type:'Country', content:'Finlande'});
db.contact.save( {type:'Phone number', content:'+358 40 334424S'});
db.contact.save( {type:'Email address', content:'1106363@laurea.fi'});
db.contact.save({type:'Github link', content:'https://github.com/ClaireGizard'});
db.contact.save({type:'Linkedin link', content:'https://fr.linkedin.com/in/claire-gizard-88bb68113'});

db.experience.save({year:'October 2016 - August 2016', title:'PayMytable Developper - (Part-time and full time)'});
db.experience.save({year:'July 2015 - December 2015', title:'Centreon - Web Developer'});
db.experience.save({year:'July 2015 - August 2015', title:'La Poste - Postman'});

db.skill.save({type:'Development Languages', details:'C/C++, Java Android, NodeJs / JavaScript, SQL, PHP, Ionic 3'});
db.skill.save({type:'Language', details:'French, English'});
db.skill.save({type:'Tools',details:'Git, Microsoft Office, Amazon AWS, Android Studio'});
