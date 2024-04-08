const express = require('express');
const router = express.Router();
const { leaderboard } = require('../../controller');

router.get('/leaderboard', (req, res) => {
    if (req.session.authorized) {
        res.send('Access granted');
    } else {
        res.send('Access denied');
    }
});

router.post('/leaderboard', leaderboard.create);

module.exports = router;