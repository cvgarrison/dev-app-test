const express = require('express');
const bodyParser = require('body-parser');

//For local dev env
require('dotenv').config();

var app = module.exports = express();

//Enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

//setup middleware body parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./routers/baseRoutes'));

// Define the port to run on
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Application Listening');
});


/*
Find the errors:
1. When I attempt to GET on /api/showme   it doesnt work.
2. When I attempt to GET on /api/whynot  it isnt returning a payload, why ?
3. When I attempt to GET on /api/google  I am not getting a response ?
4. *Once 3 is answered (error in 3 applies here too)*
   When I attempt to GET on /api/googlemaps   why is there no response?
5. Write a function that generates a shortened link with the bitly api: https://dev.bitly.com/api-reference
    The route should return an object like this one on success
    {
      success: true,
      shortUrl: 'https://bitly.is/37yRkJD'
    }
    Bitly bearer token: b052d02e8a40d8359993c16a32a2c33b815e21a2
6. Explain what this file is doing , what the included npms is
*/
