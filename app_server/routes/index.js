var express = require('express');
var router = express.Router();

var ctrlMain = require('../../controllers/main');
var ctrlFootball = require('../../controllers/ctrlFootball');
var ctrlGoldenBall = require('../../controllers/ctrlGoldenBall');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/football', ctrlFootball.winnerlist);
router.get('/goldenBall', ctrlGoldenBall.winnerlist);

module.exports = router;
