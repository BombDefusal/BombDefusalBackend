const express = require('express');
const router = express.Router();
const { leaderboard } = require('../../controller');

router.post('/leaderboard', leaderboard.create);

module.exports = router;