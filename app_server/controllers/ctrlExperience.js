const apiURL = require('./apiURLS');
const request = require('request');

const experienceList = function (req, res) {
    const path = '/api/experience';
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs: {}
    };

    request(
        requestOptions,
        function (err, response, body) {
            if (err) {
                res.render('error', {message : err.message});
            } else if (response.statusCode !== 200) {
                res.render('error', {message : 'Error accessing API: ' + response.statusMessage + '(' + response.statusCode + ')'});
            } else if (!(body instanceof Array)) {
                res.render('error', {message : 'Unexpected response data'});
            } else if (!(body.length)) {
                res.render('error', {message : 'No documents in the collection'});
            } else {
                res.render('experience', {experienceListObj: body});
            }
        }
    );
};

const showForm = function (req, res) {
  res.render('experience_add');
};

const addData = function (req, res) {
    const path = '/api/experience';

    const postdata = {
        year : req.body.year,
        title : req.body.title
    };

    const requestOptions = {
        url : apiURL.server + path,
        method: 'POST',
        json: postdata
    };

    request(
        requestOptions,
        function (err, response, body) {
            if (response.statusCode === 200) {
                res.redirect('/Experience');
            } else {
                res.render('error', {message : 'Error adding data' + response.statusMessage + '( ' + response.statusCode + ' )'});
            }
        }
    );
};

module.exports= {
    experienceList,
    showForm,
    addData
};