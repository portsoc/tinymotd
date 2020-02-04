/* A tiny message-of-the-day (MOTD) server */
const express = require('express');
const app = express();
app.use('/', express.static('client'));

let motd = "No MOTD yet.";

app.post('/motd', express.json(), function (req, res) {
  motd = req.body.msg;
  res.send('accepted');
});

app.get('/motd', (req, res) => {
  res.send(motd);
});

app.listen( 8080, (e) =>{
  console.log(`server ${e?"failed to start":"listening"}`);
});
