const ActiveUser = require('../model/activeUser');

module.exports = {
    create: async (req, res) => {
        if (req.body.dispositive) {
            const { dispositive} = req.body;

            await ActiveUser.create({
                dispositive
            });

            res.send('New user entry added to the database!');
        }
        else {
            res.send('Not added to the database!');
        }
    }
}