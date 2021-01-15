const Promise = require('bluebird');
const got = require('got');

const googleParser = {};

googleParser.getGoogle = async function() {
    return got('https://www.google.com', {
        json: false
    }).then(
        (response) => {
            return Promise.resolve({success: true, data: response.body});
        }
    ).catch(
        (e) => {
            return Promise.resolve({success: false, "error": "Internal Error: " + e.toString()});
        }
    );
}

googleParser.getMaps = async function() {
    return got('https://maps.google.com', {
        json: false
    }).then(
        (response) => {
            return Promise.resolve({success: true, data: response.body});
        }
    ).catch(
        (e) => {
            return Promise.resolve({success: false, "error": "Internal Error: " + e.toString()});
        }
    );
}

module.exports.getGoogle = googleParser.getGoogle;
