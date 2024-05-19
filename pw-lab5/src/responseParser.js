const { parseHtml } = require('./htmlParser'); // Include the parseHtml function from htmlParser.js.
const { parseJson } = require('./jsonParser'); // Include the parseJson function from jsonParser.js.

function parseResponse(response, callback) { // Define a function to parse a response.
    if (response.startsWith('HTTP/1.1 30')) { // Check if the response is a redirect.
        const newLocation = response.split('\r\n').find(line => line.startsWith('Location:')).split(' ')[1]; // Extract the new location URL.
        callback(null, `Redirect to: ${newLocation}`); // Call the callback function with the redirect location.
    } else if (response.includes('Content-Type: application/json')) { // If the response is JSON,
        const body = response.split('\r\n\r\n')[1]; // Extract the body of the response.
        callback(null, parseJson(body)); // Parse the JSON and call the callback function.
    } else { // If the response is HTML or other content,
        const body = response.split('\r\n\r\n')[1]; // Extract the body of the response.
        callback(null, parseHtml(body)); // Parse the HTML and call the callback function.
    }
}
exports.parseResponse = parseResponse; // Make the parseResponse function available outside this file.
