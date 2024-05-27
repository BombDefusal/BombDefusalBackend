const mongoose = require('mongoose');
const db = require('./index')

const leaderboardSchema = new mongoose.Schema({
    dispositive: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true,
    }
}, {
    freezeTableName: true
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;
