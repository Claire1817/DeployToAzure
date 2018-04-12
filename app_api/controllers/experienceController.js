const mongoose = require('mongoose');

const experienceSchema = mongoose.model('experience');

//GET activities
const getExperienceSchemas = function(req, res) {
    experienceSchema.find({} ,function(err, data) {
        if (err) {
            res.status(404).json({'status' : 'failed'});
        }
        res.status(200).json(data);
    })
};

//POST activity
const postExperienceSchemas = function (req, res) {
    console.log(req);
    experienceSchema.create(req.body, function(err, post) {
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
    getExperienceSchemas,
    postExperienceSchemas,
};