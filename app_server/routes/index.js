var express = require('express');
var router = express.Router();

var ctrlMain = require('../../controllers/main');
var ctrlContact = require('../../controllers/ctrlContact');
var ctrlExperience = require('../../controllers/ctrlExperience');
var ctrlSkill = require('../../controllers/ctrlSkill');
var ctrlAbout = require('../../controllers/ctrlAbout');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/contact', ctrlContact.contactList);
router.get('/Experience', ctrlExperience.experienceList);
router.get('/Skill', ctrlSkill.skillList);
router.get('/About', ctrlAbout.aboutList);

module.exports = router;
