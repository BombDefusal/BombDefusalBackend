const express = require('express');
const app = express();
const path = require('path');
const db = require('./src/main/backend/model');
const session = require('express-session')

const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    cookie: {
        sameSite: 'strict',
    }
}));
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'public')));


(async () => {
    await db.sequelize.sync();
})();

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});