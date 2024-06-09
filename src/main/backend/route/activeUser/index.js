const express = require('express');
const router = express.Router();
const { activeUser } = require('../../controller/activeUser');

router.post('/startgame', activeUser.create);

module.exports = router;