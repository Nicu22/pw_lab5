# UTM PW Lab 5 - Websockets CLI Tool
<p align="center"><a href="https://gist.github.com/strdr4605/b5c97f5268c56e01c1ee9ed9cba76abb">https://gist.github.com/strdr4605/b5c97f5268c56e01c1ee9ed9cba76abb</a></p>

## Description
This project is a command-line interface (CLI) tool named go2web designed for educational purposes to understand the workings of HTTP requests and web scraping at a low level. The tool allows users to make direct HTTP requests to specified URLs, search the web using a built-in command, and parse the response to be human-readable, all without relying on external HTTP request libraries.

## Features


## Special Conditions
No use of built-in/third-party libraries for making HTTP requests.
Focus on CLI functionality; GUI applications are not within the scope of this project.

## Prerequisites
Node.js installed on your machine.
Setup
Clone the repository to your local machine:

```
git clone CristianBrinza/pw-lab5
```


### Navigate to the project directory:

## Structure

The program is structured as follows:

- `go2web.js`: The main executable file where the CLI is implemented.
- `httpRequest.js`: Handles the creation and sending of HTTP requests using TCP sockets.
- `htmlParser.js`: Extracts and cleans text from HTML content.
- `jsonParser.js`: Handles parsing JSON responses.
- `cacheManager.js`: Manages caching of requests to avoid redundant network calls.
- `searchEngine.js`: Implements the logic to search a term using a hardcoded search engine URL and parsing the results.


## Usage
The go2web tool can be executed with the following commands:

### Display help:

```
node go2web.js -h
```
Make an HTTP request to a specified URL:

```
node go2web.js -u <URL>
```
Make sure the `go2web.js` file in your project directory is updated with the above content. Then, run the script from your terminal with the following command:

```
node go2web.js -s "<search-term>"
```

Here is a good exemple:
```
node go2web.js -s "OpenAI"
```
```
node go2web.js -u http://google.com
```

## Implementation Details
The project is implemented in JavaScript, utilizing Node.js for its execution. It makes use of TCP sockets for sending and receiving HTTP requests, adhering to the restrictions of not using external HTTP request libraries. The CLI parsing is handled using Node.js's process.argv for simplicity and directness.

## Approach and Execution
- CLI Implementation:

    - I'll use Node.js for our command-line application, which means users will need Node installed to run go2web.
The CLI arguments will be parsed using basic process.argv to identify -u, -s, and -h flags.
- HTTP Requests without Libraries:

    - TCP socket connections will be created using Node.js's net module to send HTTP requests and receive responses.
- Human-readable Responses:

    - For HTML content, we'll strip tags and return clean text.
    - For JSON, we'll format it for readability.
- Search Engine Query:

    - I'll simulate a search engine request and parse the first 10 results.
- Caching:

    - Implement a simple caching mechanism using an in-memory object or file system for repeated requests.
- Content Negotiation:

    - The program will handle both HTML and JSON responses, parsing them accordingly.


### Summary of the Flow
- `Start`: Run go2web.js with a URL.
- `Parse Arguments`: Identify the URL to fetch.
- `Make HTTP Request`: Use httpRequest.js to send a request.
- `Receive Response`: Get the server's response.
- `Parse Response`: Use responseParser.js to handle redirects, HTML, or JSON.
- `Display Content`: Show the parsed content in the terminal.

<br>

- `HTTP Client` (httpClient.js): Manages TCP connections to make HTTP requests and handle responses.
- `CLI Parser` (cliParser.js): Parses command-line arguments to understand user commands.

## Contributions
This project is open to contributions. If you wish to contribute, please fork the repository and submit a pull request with your proposed changes.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.