const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');
const experienceController = require('../controllers/experienceController');
const skillController = require('../controllers/skillsController');

router
    .route('/contact')
    .get(contactController.getContactSchemas)
    .post(contactController.postContactSchemas);


router
    .route('/experience')
    .get(experienceController.getExperienceSchemas)
    .post(experienceController.postExperienceSchemas);


router
    .route('/skill')
    .get(skillController.getSkillSchemas)
    .post(skillController.postSkillSchemas);


module.exports = router;



