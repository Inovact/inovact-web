/*
 *  Helpers Module
 *
 */

//  Dependencies
const config = require("../config/keys");
const https = require("https");
const querySting = require('query-string');
const { Buffer } = require("buffer");

// Initiate the helpers module
const helpers = {};

// Delete a folder on imagekit
helpers.deleteFolder = function (folderPath, callback) {
    var https = require('follow-redirects').https;

    var options = {
    'method': 'DELETE',
    'hostname': 'api.imagekit.io',
    'path': '/v1/folder/',
    'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Basic cHJpdmF0ZV93OVpOUnkzMUNCbW5zbWdGNDlNNzJmK2dXYjg9Ojo='
    },
    'maxRedirects': 20
    };

    var req = https.request(options, function (res) {
        if (res.statusCode == 204 || res.statusCode == 404) {
            callback({success: true});
        } else {
            callback({success: false});
        }
    });

    // Stringify paylaod
    var postData = JSON.stringify({"folderPath": folderPath});

    // Set payload length
    req.setHeader('Content-Length', postData.length);

    // Send the payload
    req.write(postData);

    // End the request
    req.end();
}

// Export the helpers module
module.exports = helpers;