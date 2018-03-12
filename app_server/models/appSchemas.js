const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({type: String, content: String});
const skillSchema = new mongoose.Schema({type: String, details: String});
const experienceSchema = new mongoose.Schema({type: String, title: String});

mongoose.model('contact', contactSchema);
mongoose.model('skill', skillSchema);
mongoose.model('experience', experienceSchema);