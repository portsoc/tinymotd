# Tiny Post Upload

This example uses the `fetch` function of Javascript to issue an HTTP `POST` request to an _Express_ server.  The request includes a JSON message which the  server stores and returns to the client.  Subsequent HTTP `GET` requests can retrieve the stored message.

## Installation

```shell
git clone https://github.com/portsoc/tinypostupload.git
cd tinypostupload
npm install
npm start
```

Then open `http://localhost:8080` in your preferred browser.

## How it works

The example comprises two parts, a server and a client.

### The Server ...

* listens on port 8080 for HTTP requests.
* will serve any files contained in the client folder (therefore requesting `http://localhost:8080/` will return the `index.html` file).
* provides a special path `http://localhost:8080/message` with different behaviours for 'POST' and 'GET' requests.
  * When a `GET` request is received, stored message is returned.
  * When a `POST` request is received, the server updates the message that the server sends in response to a `GET` request.  This updated mesage is returned to the client as a response to the POST request (so the client can clearly check if the update was successful).

You can test to see what the current message is by opening `http://localhost:8080/message` in your preferred browser.

### The Client

* The client uses a function called `sendMessage` to undertake the round-trip from client, to server, and back to the client.  This `sendMessage` function:
  * runs whever the `upload` button is pressed.
  * constructs an object that describes the method to be used (`POST`), a header block where the data format of JSON is specified, and a `body` that contains the stringified JSON message that is sent to the server.
  * waits for the server to respond and updates the page to reflect what the server sent back (which should be exactly what was sent).
