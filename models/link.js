"use strict";

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const linkSchema = new mongoose.Schema({
    category: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    }
});



const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
