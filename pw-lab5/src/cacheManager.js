let cache = {}; // Create an empty object that will act as our cache storage.

function getCached(url) { // Define a function to retrieve cached data for a given URL.
    return cache[url]; // Return the cached data for the URL if it exists.
}

function cacheResponse(url, data) { // Define a function to store data in the cache for a given URL.
    cache[url] = data; // Assign the data to the cache object using the URL as the key.
}

exports.getCached = getCached; // Make the getCached function available outside this file.
exports.cacheResponse = cacheResponse; // Make the cacheResponse function available outside this file.
