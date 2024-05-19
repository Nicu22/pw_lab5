const net = require('net'); // Include the net module for TCP network operations.
const { parseResponse } = require('./responseParser'); // Include the parseResponse function from responseParser.js.

function sendHttpRequest(host, path, callback) { // Define a function to send an HTTP request.
    const request = `GET ${path} HTTP/1.1\r\nHost: ${host}\r\n\r\n`; // Create the HTTP request string.
    const client = net.createConnection({ host, port: 80 }, () => { // Create a connection to the server.
        client.write(request); // Send the request.
    });

    client.on('data', (data) => { // Handle the response data.
        parseResponse(data.toString(), callback); // Parse the response and execute the callback function.
        client.end(); // Close the connection.
    });
}
exports.sendHttpRequest = sendHttpRequest; // Make the sendHttpRequest function available outside this file.
