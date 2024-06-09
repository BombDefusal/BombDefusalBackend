const mongoose = require('mongoose');
const db = require('./index')

const activeUserSchema = new mongoose.Schema({
    dispositive: {
        type: String,
        required: true
    }
}, {
    freezeTableName: true
});

const ActiveUser = mongoose.model('ActiveUser', activeUserSchema);

module.exports = ActiveUser;