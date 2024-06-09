const client = require('./src/main/backend/MQTTConfig/index')
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('../BombDefusalBackend/src/main/backend/model/index');
const leaderboards = require('./src/main/backend/route/leaderboard');

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: 'strict',
    }
}));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use('/leaderboard', leaderboards);
app.use('/static', express.static(path.join(__dirname, 'public')));

const Leaderboard = require('./src/main/backend/model/leaderboard');
const ActiveUser = require('./src/main/backend/model/activeUser');

app.post('/leaderboard', async (req, res) => {
    try {
        await Leaderboard.create({
            dispositive: req.body.dispositive,
            time: req.body.time
        });
        return res.json("User created successfully");
    } catch (error) {
        console.error(error);
        return res.status(400).json(error);
    }
});

app.post('/startgame', async (req, res) => {
    try {
        await ActiveUser.create({
            dispositive: req.body.dispositive
        });
        return res.json("Active user created successfully");
    } catch (error) {
        console.error(error);
        return res.status(400).json(error);
    }
})


app.get('/leaderboard', async (req, res) => {
    try {
        const data = await Leaderboard.find({});
        return res.json(data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

mongoose.connect('mongodb://172.31.29.151:27017/bombdefusal')
    .then(() => console.log('Connection to MongoDB established successfully.'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});