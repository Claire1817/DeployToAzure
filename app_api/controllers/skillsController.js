const mongoose = require('mongoose');

const skillSchema = mongoose.model('skill');

//GET activities
const getSkillSchemas = function(req, res) {
    skillSchema.find({} ,function(err, data) {
        if (err) {
            res.status(404).json({'status' : 'failed'});
        }
        res.status(200).json(data);
    })
};

//POST activity
const postSkillSchemas = function (req, res) {
    skillSchema.create(req.body, function(err, post) {
        if (err) {
            res.status(500).json({'status' : 'error in mongo'});
        }
        else {
            console.log(post);
            res.status(200).json({'status' : 'ok', 'data' : post});
        }
    });
};


module.exports = {
    getSkillSchemas,
    postSkillSchemas,
};