const mongoose = require('mongoose');

const contactSchema = mongoose.model('contact');

//GET activities
const getContactSchemas = function(req, res) {
    contactSchema.find({} ,function(err, data) {
        if (err) {
            res.status(404).json({'status' : 'failed'});
        }
        res.status(200).json(data);
    })
};

//POST activity
const postContactSchemas = function (req, res) {
    contactSchema.create(req.body, function(err, post) {
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
    getContactSchemas,
    postContactSchemas,
};