function parseHtml(html) { // Define a function to parse HTML content.
    return html.replace(/<\/?[^>]+(>|$)/g, "").trim(); // Remove HTML tags and trim whitespace.
}
exports.parseHtml = parseHtml; // Make the parseHtml function available outside this file.
