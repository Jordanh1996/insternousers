require('./config/config');
require('./database/mongo');

const express = require('express');
const axios = require('axios');
const _ = require('lodash')
const ashdodFollowing = require('./models/ashdodFollowing');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('this app is awake');
});

app.post('/ashdod', (req, res) => {
    const body = _.pick(req.body, ['skip', 'limit']);
    ashdodFollowing.find().skip(body.skip).limit(body.limit).then((records) => {
        const users = records.map((record) => record._id);
        res.send(users);
    }).catch(() => {
        res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});

setInterval(() => {
    axios.get('https://insternousers.herokuapp.com/').then(() => { });
}, 1000 * 60 * 5)