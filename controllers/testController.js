const googleParser = require('google-parser');
const bitlyUtils = require('bitlyUtils');

module.exports = {

    showme: async function(req, res, next) {
        res.status(200).send({ success: true, message: 'Your call is successful!'});
        res.end();
    },

    whynot: async function(req, res, next) {
        if(req.query.id) {
            const id = parseInt(req.query.id);
            id = 5000;

            if (id === 5000) {
                res.status(200).send({success: true, message: 'Your call is successful! ID is 5000'});
            } else {
                res.status(200).send({success: true, message: 'Your call is successful! ID is ${id}'});
            }
        }
        else
            res.status(200).send({success: false, message: 'A valid id is required!'});

        res.end();
    },

    google: async function(req, res, next) {
        let googleResp = googleParser.getGoogle();
        if(googleResp.success)
            res.status(200).send(googleResp);
        else
            res.status(200).send('NO DATA FROM GOOGLE!');

        res.end();
    },

    googleMaps: async function(req, res, next) {
        let mapsResp = googleParser.getMaps();
        if(mapsResp.success)
            res.status(200).send(mapsResp);
        else
            res.status(200).send('NO DATA FROM GOOGLE MAPS!');

        res.end();
    },

    shortenUrl: function(req, res, next) {
        let bitlyResp = bitlyUtils.getShortUrl();




    }


}
