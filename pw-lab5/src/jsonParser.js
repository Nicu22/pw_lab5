function parseJson(json) { // Define a function to parse JSON content.
    return JSON.stringify(JSON.parse(json), null, 2); // Parse the JSON string and then stringify it with formatting.
}
exports.parseJson = parseJson; // Make the parseJson function available outside this file.
