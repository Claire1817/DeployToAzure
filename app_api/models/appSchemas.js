const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({type:String, content:String});
const skillSchema = new mongoose.Schema({type:String, details:String});
const experienceSchema = new mongoose.Schema({year:String, title:String});

mongoose.model('contact', contactSchema, 'contact');
mongoose.model('skill', skillSchema, 'skill');
mongoose.model('experience', experienceSchema, 'experience');