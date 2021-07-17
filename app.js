const routes = require('./server/routes/index.route');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors');
const cronjobs = require('./server/utils/cronjob')
const schedule = require('node-schedule')
var otpJson = []
// const { subscription } = require('./server/models/subscription');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config();

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

// View Engine Setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./server'));
app.use(cors());

//Router
app.use('/', routes);

cronjobs()


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('we are live on port ' + port);
});


mongoose.connect('mongodb://localhost:27017/godigital', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Could not connected to MongoDB...', err));
