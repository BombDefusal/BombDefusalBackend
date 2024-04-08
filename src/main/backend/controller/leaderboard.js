const Leaderboard = require('../model/leaderboard');

module.exports = {
    create: async (req, res) => {
        if (req.body.dispositive && req.body.time) {
            const { dispositive, time } = req.body;

            await Leaderboard.create({
                dispositive,
                time
            });

            res.send('New leaderboard entry added to the database!');
        }
        else {
            res.send('Not added to the database!');
        }
    }
}