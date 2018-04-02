const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');
const experienceController = require('../controllers/experienceController');
const skillController = require('../controllers/skillsController');

router
    .route('/contact')
    .get(contactController.getContactSchemas)
    .post(contactController.postContactSchemas)
    .delete(contactController.deleteContactSchemas);


router
    .route('/experience')
    .get(experienceController.getExperienceSchemas)
    .post(experienceController.postExperienceSchemas)
    .delete(experienceController.deleteExperienceSchemas);


router
    .route('/skill')
    .get(skillController.getSkillSchemas)
    .post(skillController.postSkillSchemas)
    .delete(skillController.deleteSkillSchemas);


module.exports = router;



